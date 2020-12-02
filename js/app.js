

// burger menu

let menuBtn = document.querySelector('.nav__button');
let navLinks = document.querySelectorAll('.nav-link');
let body = document.querySelector('body')

menuBtn.addEventListener('click', () => {
    body.classList.toggle('open')
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});

// scroll nav & go top
const navbar = document.querySelector('.header');
const iconBtn = document.querySelector('.icons-bar');
const goTopBtn = document.getElementById('go-top');
window.onscroll = function () {
    if (window.pageYOffset > 150) {
        navbar.classList.add('scroll')
        iconBtn.classList.add('icons-bar-bg')
        goTopBtn.style.display = 'block'
    } else {
        navbar.classList.remove('scroll')
        iconBtn.classList.remove('icons-bar-bg')
        goTopBtn.style.display = 'none'
    }
}

goTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

// modal

const openModal = document.getElementById('open-btn');
const closeModal = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay')

openModal.addEventListener('click', function () {
    modal.classList.add('open-modal')
})

closeModal.addEventListener('click', function () {
    modal.classList.remove('open-modal')
})

