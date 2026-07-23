const burgerMenu = document.querySelector('.menu img:first-child');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');
const menuContainer = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.add('open');
    menuContainer.classList.add('show-close');
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuContainer.classList.remove('show-close');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuContainer.classList.remove('show-close');
    });
});

const swiper = new Swiper('.swiper', {  
  // 1. Включаем центрирование активного слайда
  centeredSlides: true, 
  
  // 2. Указываем дробное число. 
  // Например, 1.2 означает: 1 целый слайд в центре + по 0.1 (10%) от соседних по бокам
  slidesPerView: 1.2, 
  
  spaceBetween: 20, 

  // 3. Настраиваем адаптивность: на больших экранах показываем больше кусочков
  breakpoints: {
    640: {
      slidesPerView: 1.5, // 1 по центру, по 25% по бокам
    },
    1024: {
      slidesPerView: 2.5, // На ПК можно показать больше
    }
  }
});