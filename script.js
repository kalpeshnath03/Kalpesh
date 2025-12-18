document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".nav");

    /* Shadow on scroll */
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    /* Particles background */
    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { speed: 1 },
            line_linked: { enable: true },
            color: { value: "#ffffff" }
        }
    });

});
/* Scroll reveal animation */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < window.innerHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
