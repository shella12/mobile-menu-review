const hamburger = document.querySelector('.menu-bars');
const mobile_menu = document.querySelector('#mobile-nav');

hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
  });