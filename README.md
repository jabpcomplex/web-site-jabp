# Sitio personal - Estructura y documentación

Este repositorio contiene un sitio estático organizado para ser modular y mantenible.

## Estructura principal

- `index.html` - Página principal, ahora carga los assets modulares.
- `assets/css/` - CSS modular dividido por responsabilidad.
  - `main.css` - importa los fragmentos.
  - `base.css`, `header.css`, `components.css`, `carousel.css`.
- `assets/js/` - JavaScript modular como ES modules.
  - `main.js` - orquestador que inicializa los módulos.
  - `login.js` - maneja el formulario de login (SRP).
  - `resenas.js` - carga y renderiza reseñas desde archivos markdown.
  - `carousel.js` - construye slides e inicializa Swiper.
- `img/carrusel/` - imágenes utilizadas por el carrusel.

## Principios aplicados

- Single Responsibility: cada archivo JS/CSS tiene una responsabilidad clara.
- Open/Closed: los módulos exportan funciones que pueden extenderse sin modificar su código interno.
- Liskov/Interface Segregation/Dependency Inversion aplicados de forma pragmática: las dependencias externas (por ejemplo Swiper) se usan desde el orquestador y el módulo de carrusel sólo asume la existencia del global `Swiper`.

## Cómo probar localmente

1. Levanta un servidor desde la raíz del proyecto:

```bash
python3 -m http.server 8000
```

2. Abre `http://localhost:8000/` en tu navegador.

## Cómo añadir un nuevo componente JS

1. Crea `assets/js/miComponente.js` y exporta funciones públicas.
2. Importa y usa en `assets/js/main.js`.

## Notas y próximos pasos recomendados

- Mover los datos de `recientes` y `reseñas` a un `data/` JSON para facilitar mantenimiento.
- Añadir pruebas unitarias (por ejemplo con Jest + JSDOM) para los módulos JS.
- Considerar build step (Rollup/Vite) si crece la base de código.

## Cambios recientes: Carrusel (imágenes y navegación)

- Se corrigieron rutas de las imágenes usadas en el carrusel: ahora `assets/js/main.js` referencia los archivos `img/carrusel/*.webp` que existen en el repositorio (antes había referencias a `.png` inexistentes que provocaban imágenes rotas).
- Se mejoraron los estilos en `assets/css/carousel.css` para que el carrusel sea responsivo y las imágenes rellenen el espacio disponible (uso de `object-fit: cover`, altura basada en `vh` con un `max-height`, y eliminación de padding/bordes que impedían que la imagen ocupara todo el slide).
- Se añadieron y estilizaron los botones de navegación (anterior/siguiente) dentro del contenedor del carrusel; el módulo `assets/js/carousel.js` crea los elementos `.swiper-button-prev` y `.swiper-button-next` si no existen y Swiper los usa para la navegación.

- Si por alguna razón la librería Swiper no está disponible (por ejemplo trabajo sin conexión al CDN), se incluyó un "fallback" ligero dentro de `assets/js/carousel.js` que provee navegación por flechas y autoplay básico; ver consola del navegador para el mensaje: `"Swiper no está disponible. Usando fallback ligero de carrusel."`.

Si después de desplegar el sitio sigues viendo imágenes rotas, asegúrate de limpiar la caché del navegador o de servir los archivos desde un servidor local (`python3 -m http.server`) para evitar problemas con rutas relativas.

## Cambios recientes: enlaces y rutas en `reseñas`

- Se corrigió la ruta al CSS en `reseñas/index.html` (ahora usa `../assets/css/main.css`) para que la página `http://.../reseñas/` cargue correctamente los estilos cuando se accede desde la raíz.
- Se corrigió el enlace desde el `index.html` raíz que apuntaba a una forma de unicode distinta (`reseñas/`) y podía causar 404s por normalización; ahora apunta a `reseñas/` (carpeta con `ñ`).
