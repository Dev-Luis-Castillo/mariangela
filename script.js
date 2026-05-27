// NAVBAR SHADOW ON SCROLL

window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.custom-navbar');

    if (window.scrollY > 30) {

        navbar.classList.add('shadow-sm');

    } else {

        navbar.classList.remove('shadow-sm');

    }

});


// SMOOTH FADE ANIMATION

document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll(
        '.hero-content, .hero-image, .about-image, .service-card, .contact-form-wrapper'
    );

    elements.forEach((element, index) => {

        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';

        setTimeout(() => {

            element.style.transition = 'all .8s ease';

            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';

        }, 150 * index);

    });

});


// CLOSE MOBILE MENU ON CLICK

const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        if (navbarCollapse.classList.contains('show')) {

            new bootstrap.Collapse(navbarCollapse).toggle();

        }

    });

});