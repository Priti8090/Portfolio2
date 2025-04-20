var typed = new Typed(".text",{
    strings: ["Frontend Developer...","Web Developer...","CSE Student..."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });
});