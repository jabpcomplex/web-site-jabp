import { initLogin } from './login.js';
import { loadResenas } from './resenas.js';
import { initCarousel } from './carousel.js';

// Datos (pueden moverse a JSON o API en el futuro)
const recientes = [
  { nombre: "Primeros pasos para usar GNU/Linux", link: "reseñas/viewer.html?file=post_1_primeros_pasos_gnu-linux.md", img: "img/carrusel/img_1.webp" },
  { nombre: "Tutorial Python", link: "programacion/viewer.html?file=reseña_2.md", img: "img/carrusel/img_2.webp" },
  { nombre: "Análisis geoespacial", link: "investigacion/analisis_geoespacial.pdf", img: "img/carrusel/img_3.webp" },
  { nombre: "Filosofía de la ciencia", link: "reseñas/viewer.html?file=filosofia_ciencia.md", img: "img/carrusel/img_4.webp" },
  { nombre: "Machine Learning básico", link: "programacion/viewer.html?file=ml_scikit.md", img: "img/carrusel/img_5.webp" }
];

const resenas = [
  { titulo: "Reseña 1", archivo: "reseñas/reseña_1.md" },
  { titulo: "Reseña 2", archivo: "reseñas/reseña_2.md" },
  { titulo: "Reseña 3", archivo: "reseñas/reseña_3.md" }
];

document.addEventListener('DOMContentLoaded', () => {
  initLogin('.login-form');
  loadResenas('reseñas-container', resenas);
  initCarousel(recientes, 'carrusel-list');
});
