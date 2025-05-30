const hamburgerBtn = document.querySelector('.hamburger-btn');
const mainNav = document.querySelector('.main-nav');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('is-active');
  mainNav.classList.toggle('is-active');
  body.classList.toggle('no-scroll'); // Para impedir scroll quando o menu está aberto
});

// Opcional: Fechar menu ao clicar em um link (para SPAs ou navegação na mesma página)
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('is-active')) {
      hamburgerBtn.classList.remove('is-active');
      mainNav.classList.remove('is-active');
      body.classList.remove('no-scroll');
    }
  });
}); 