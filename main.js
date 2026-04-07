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

// Закрыть меню при клике на ссылку
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuContainer.classList.remove('show-close');
    });
});
