// resenas.js - carga y renderiza reseñas (SRP)
/**
 * Carga las reseñas desde archivos markdown y las renderiza en el contenedor.
 * @param {string} containerId
 * @param {Array<{titulo:string,archivo:string}>} reseñas
 */
export async function loadResenas(containerId = 'reseñas-container', reseñas = []) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = '';

  for (const r of reseñas) {
    try {
      const res = await fetch(r.archivo);
      const texto = await res.text();
      const card = document.createElement('div');
      card.className = 'reseña-card';
      card.innerHTML = `<h3>${r.titulo}</h3><p>${texto.substring(0, 150)}...</p>`;
      cont.appendChild(card);
    } catch (err) {
      console.error('Error cargando reseña', r, err);
      const fallback = document.createElement('div');
      fallback.className = 'reseña-card';
      fallback.innerHTML = `<h3>${r.titulo}</h3><p>Error al cargar el contenido.</p>`;
      cont.appendChild(fallback);
    }
  }
}
