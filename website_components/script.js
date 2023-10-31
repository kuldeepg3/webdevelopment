const menu = document.querySelector('.menu');
const toggleButton = document.querySelector('.menu-toggle');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});
