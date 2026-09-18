const navigationToggle = document.querySelector('.nav-toggle');
const navigationMenu = document.querySelector('#nav-menu');

if (navigationToggle && navigationMenu) {
  navigationToggle.addEventListener('click', () => {
    const isOpen = navigationMenu.classList.toggle('is-open');

    navigationToggle.setAttribute('aria-expanded', String(isOpen));
    navigationToggle.setAttribute(
      'aria-label',
      isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );
  });

  navigationMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navigationMenu.classList.remove('is-open');
      navigationToggle.setAttribute('aria-expanded', 'false');
      navigationToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    }
  });
}