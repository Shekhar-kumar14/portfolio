gsap.registerPlugin(ScrollTrigger);

/* NAV MENU */
gsap.from(".menu-names ul li a", {
    opacity: 0,
    y: -10,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
});

/* NAVBAR */
gsap.from(".first-container", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
});

/* SKILLS */
gsap.from(".skill-img", {
    opacity: 0,
    y: 30,
    stagger: 0.3,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#skills",
        start: "top 75%",
    }
});

/* HAMBURGER */
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu-names");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu-names a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            menu.classList.remove("active");
        });
    });
}

/* REFRESH AFTER LOAD */
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

/* HERO BG ZOOM */
gsap.to(".social-container", {
    backgroundSize: "120%",
    scrollTrigger: {
        trigger: ".social-container",
        scrub: 1
    }
});

/* ABOUT HEADINGS */
gsap.from(".about-section-name h1", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: "#About",
        start: "top 75%",
    }
});

gsap.from(".designation h1", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: "#About",
        start: "top 75%",
    }
});

/* ABOUT IMAGE */
gsap.from(".inside-overlay-img img", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: "#About",
        start: "top 75%",
    }
});

/* ABOUT TEXT LETTER ANIMATION */
function breakText() {
    const p = document.querySelector(".about-me p");
    if (!p) return;

    const letters = p.textContent.split("");
    p.innerHTML = letters.map(l => `<span>${l}</span>`).join("");
}
breakText();

gsap.from(".about-me p span", {
    y: 30,
    opacity: 0,
    stagger: 0.03,
    scrollTrigger: {
        trigger: "#About",
        start: "top 70%",
    }
});

/* WORK SECTION (SAFE ANIMATION) */
gsap.from(".work", {
    scale: 0.95,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#Work",
        start: "top 75%",
    }
});

gsap.from(".work-text", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".work-text",
        start: "top 80%",
    }
});

/* NAVBAR SCROLL EFFECT */
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".first-container");
    const name = document.querySelector(".name h1");

    if (!nav || !name) return;

    if (window.scrollY > 50) {
        nav.style.backgroundColor = "black";
        nav.style.padding = "10px 30px";
        name.style.fontSize = "22px";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "20px 50px";
        name.style.fontSize = "30px";
    }
});
