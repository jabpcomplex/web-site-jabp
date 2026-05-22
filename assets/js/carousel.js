// carousel.js - construcción del carrusel y inicialización de Swiper (SRP)
/**
 * Construye slides dentro del wrapper indicado y lanza Swiper.
 * @param {Array<{nombre:string,link:string,img:string}>} recientes
 * @param {string} wrapperId
 * @returns {Swiper|null}
 */
export function initCarousel(recientes = [], wrapperId = 'carrusel-list') {
  const wrapper = document.getElementById(wrapperId);
  if (!wrapper) return null;
  wrapper.innerHTML = '';

  // Crear slides usando <picture> para preferir webp y caer a png/jpg
  recientes.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    // calcular ruta webp si la imagen tiene extension conocida, sino usar la que venga
    const fallback = item.img || '';
    const webp = fallback.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    slide.innerHTML = `
      <a href="${item.link}" target="_blank" class="slide-link">
        <picture class="carousel-media">
          <source srcset="${webp}" type="image/webp">
          <img src="${fallback}" alt="${item.nombre}" class="carousel-img">
        </picture>
        <div class="slide-caption">${item.nombre}</div>
      </a>
    `;
    wrapper.appendChild(slide);
  });

  // Añadir controles de navegación dentro del contenedor .swiper si no existen
  const swiperContainer = wrapper.closest('.swiper');
  let prevBtn, nextBtn;
  if (swiperContainer) {
    // Crear botones antes de inicializar Swiper para asegurar referenciación
    prevBtn = swiperContainer.querySelector('.swiper-button-prev');
    nextBtn = swiperContainer.querySelector('.swiper-button-next');
    if (!prevBtn) {
      prevBtn = document.createElement('div');
      prevBtn.className = 'swiper-button-prev';
      prevBtn.setAttribute('role', 'button');
      prevBtn.setAttribute('aria-label', 'Anterior');
      prevBtn.tabIndex = 0;
      swiperContainer.appendChild(prevBtn);
    }
    if (!nextBtn) {
      nextBtn = document.createElement('div');
      nextBtn.className = 'swiper-button-next';
      nextBtn.setAttribute('role', 'button');
      nextBtn.setAttribute('aria-label', 'Siguiente');
      nextBtn.tabIndex = 0;
      swiperContainer.appendChild(nextBtn);
    }
  }

  if (typeof Swiper !== 'undefined') {
    return new Swiper('.swiper', {
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      autoplay: { delay: 3000, disableOnInteraction: false },
      keyboard: { enabled: true, onlyInViewport: true },
      a11y: { enabled: true },
      preloadImages: true,
      // Si en el futuro se usa lazy loading, activar lazy: true y data-src en las imágenes
    });
  } else {
    console.warn('Swiper no está disponible. Usando fallback ligero de carrusel.');

    // Fallback ligero: implementa navegación básica (prev/next), autoplay y teclado
    const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
    if (slides.length === 0) return null;

    // Preparar layout tipo slider (flex)
    wrapper.style.display = 'flex';
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.width = `${slides.length * 100}%`;
    slides.forEach(sl => {
      sl.style.flex = '0 0 100%';
      sl.style.boxSizing = 'border-box';
    });

    let idx = 0;
    let autoplayTimer = null;
    const count = slides.length;

    function show(i) {
      idx = ((i % count) + count) % count;
      wrapper.style.transform = `translateX(-${idx * (100 / count)}%)`;
    }

    function next() { show(idx + 1); }
    function prev() { show(idx - 1); }

    // Conectar botones si existen
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });

    // Teclado
    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') { next(); resetAutoplay(); }
      if (e.key === 'ArrowLeft') { prev(); resetAutoplay(); }
    });

    // Autoplay
    function startAutoplay() {
      if (autoplayTimer) return;
      autoplayTimer = setInterval(next, 3000);
    }
    function stopAutoplay() { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }

    // Pause on hover
    const container = wrapper.closest('.swiper') || wrapper.parentElement;
    if (container) {
      container.addEventListener('mouseenter', stopAutoplay);
      container.addEventListener('mouseleave', startAutoplay);
    }

    // Inicializar
    show(0);
    startAutoplay();

    // Retornar un API mínimo compatible
    return {
      next,
      prev,
      goTo: show,
      destroy() {
        stopAutoplay();
        if (nextBtn) nextBtn.replaceWith(nextBtn.cloneNode(true));
        if (prevBtn) prevBtn.replaceWith(prevBtn.cloneNode(true));
        wrapper.style.transform = '';
        wrapper.style.transition = '';
        wrapper.style.display = '';
        slides.forEach(sl => { sl.style.flex = ''; });
      }
    };
}

}
