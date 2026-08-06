function toggleNav() {
    const nav = document.querySelector("header .nav");
    const button = document.querySelector(".hamburger");
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
}

function initHamburger() {
    const button = document.querySelector(".hamburger");
    if (!button) return;
    button.addEventListener("click", toggleNav);
}

document.addEventListener("DOMContentLoaded", initHamburger);