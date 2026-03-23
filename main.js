const nav = document.querySelector('.nav-container');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');

// Функция для открытия
burger.addEventListener('click', () => {
    nav.classList.add('nav-active');
    burger.classList.add('nav-active');
    close.classList.add('nav-active');
});

// Функция для закрытия (нажимаем на крестик)
close.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('nav-active');
    close.classList.remove('nav-active');
});