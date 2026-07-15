import { initLogin } from './login.js';
import { loadResenas } from './resenas.js';
import { initCarousel } from './carousel.js';

// Datos (pueden moverse a JSON o API en el futuro)
const recientes = [
  { nombre: "Primeros pasos para usar GNU/Linux", link: "publicaciones_gnulinux/viewer.html?file=post_1_primeros_pasos_gnu-linux.md", img: "img/carrusel/img_1.webp" },
  { nombre: "Tutorial Python", link: "programacion/viewer.html?file=reseña_2.md", img: "img/carrusel/img_2.webp" },
  { nombre: "Análisis geoespacial", link: "investigacion/analisis_geoespacial.pdf", img: "img/carrusel/img_3.webp" },
  { nombre: "Territorios de Paz", link: "articulos_opinion/viewer.html?file=opinion_1.md", img: "img/carrusel/territorios_de_paz.webp" },
  { nombre: "Machine Learning básico", link: "programacion/viewer.html?file=ml_scikit.md", img: "img/carrusel/img_5.webp" }
];

const resenas = [
  { titulo: "Documento 1", archivo: "articulos_opinion/opinion_1.md" },
  { titulo: "Documento 2", archivo: "articulos_opinion/opinion_2.md" },
  { titulo: "Documento 3", archivo: "articulos_opinion/opinion_3.md" }
];

document.addEventListener('DOMContentLoaded', () => {
  initLogin('.login-form');
  loadResenas('reseñas-container', resenas);
  initCarousel(recientes, 'carrusel-list');
});
