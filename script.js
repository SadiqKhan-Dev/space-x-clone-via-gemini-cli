const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-sidebar');

btn.addEventListener('click', navToggle);
overlay.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('show');
    mobileMenu.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
}