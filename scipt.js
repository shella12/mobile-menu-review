const hamburger = document.querySelector('.menu-bars');
const mobileMenu = document.querySelector('#mobile-nav');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});