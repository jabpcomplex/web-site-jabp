// login.js - responsable del manejo del formulario de login (SRP)
/**
 * Inicia el manejador de login
 * @param {string} selector - selector del formulario
 * @returns {Function} cleanup - función para remover el listener
 */
export function initLogin(selector = '.login-form') {
  const form = document.querySelector(selector);
  if (!form) return () => {};

  function onSubmit(e) {
    e.preventDefault();
    // Comportamiento minimal: simular login
    alert('Login simulado. Esto es solo visual en GitHub Pages.');
  }

  form.addEventListener('submit', onSubmit);
  // devolver cleanup para testabilidad/limpieza
  return () => form.removeEventListener('submit', onSubmit);
}
