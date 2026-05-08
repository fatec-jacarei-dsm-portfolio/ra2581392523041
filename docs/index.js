const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuIcon = menuToggle.querySelector("i");

navMenu.classList.remove("active");
menuToggle.setAttribute("aria-expanded", "false");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

navMenu.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuIcon.className = "ri-menu-line";
    });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
});

document.querySelectorAll(".reveal").forEach(section => {
    revealObserver.observe(section);
});
