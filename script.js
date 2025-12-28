gsap.registerPlugin(ScrollTrigger);

/* NAV MENU */
gsap.from(".menu-names ul li a",{
    opacity:0,
    y:-10,
    duration:0.6,
    stagger:0.2,
    ease:"power2.out"
});

/* NAVBAR */
gsap.from(".first-container",{
    opacity:0,
    y:30,
    duration:0.8,
    ease:"power2.out"
});
/* Skiils */
gsap.from(".skill-img", {
    opacity: 0,
    y: 30,
    stagger: 0.5,
    duration: 10,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#Skills",
        start: "top 75%",
        end: "bottom 15%",
        scrub: 1,

    }
});

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu-names");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// link click pe menu close
document.querySelectorAll(".menu-names a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    });
});


/* refresh after images load */
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

/* HERO BG ZOOM */
gsap.to(".social-container",{
    backgroundSize:"120%",
    scrollTrigger:{
        trigger:".social-container",
        scrub:1
    }
});

/* ABOUT TEXT */
gsap.from(".about-section-name h1",{
    x:-50,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#About",
        start:"top 75%",
        end:"bottom 25%",
        toggleActions:"play reverse play reverse"
    }
});

gsap.from(".designation h1",{
    x:50,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#About",
        start:"top 75%",
        end:"bottom 25%",
        toggleActions:"play reverse play reverse"
    }
});

/* OVERLAY SHOW */
gsap.to(".overlay",{
    opacity:1,
    scrollTrigger:{
        trigger:"#About",
        start:"top center",
        scrub:1
    }
});

/* IMAGE */
gsap.from(".inside-overlay-img img",{
    y:-30,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#About",
        start:"top 75%",
        end:"bottom 25%",
        toggleActions:"play reverse play reverse"
    }
});

/* BREAK TEXT */
function breakText(){
    const p = document.querySelector(".about-me p");
    const letters = p.textContent.split("");
    p.innerHTML = letters.map(l => `<span>${l}</span>`).join("");
}
breakText();

/* TEXT ANIMATION */
gsap.from(".about-me p span",{
    y:40,
    opacity:0,
    stagger:0.03,
    scrollTrigger:{
        trigger:"#About",
        start:"top center"
    }
});
gsap.from(".work-text", {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
        trigger: ".work-text",
        start: "top 75%",
        end: "bottom 25%",
    }
});

gsap.from(".work-text", {
    clipPath: "inset(0 0 100% 0)",
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".work-text",
        start: "top 75%",
        end: "bottom 25%",
    }
});
gsap.from(".work", {
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#Work",
        start: "top 70%",
        end: "bottom 25%",
       
    }
});

//skills animation

/* NAVBAR SCROLL */
window.addEventListener("scroll",()=>{
    const nav = document.querySelector(".first-container");
    const name = document.querySelector(".name h1");

    if(window.scrollY > 50){
        nav.style.backgroundColor = "black";
        nav.style.padding = "10px 30px";
        name.style.fontSize = "22px";
    }else{
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "20px 50px";
        name.style.fontSize = "30px";
    }
});
const workPara = document.querySelector(".work-text");
const readMoreBtn = document.querySelector(".read-more-btn");

readMoreBtn.addEventListener("click", () => {
    workPara.classList.toggle("expanded");
    workPara.classList.toggle("collapsed");

    if(workPara.classList.contains("expanded")){
        readMoreBtn.textContent = "Read Less";
        ScrollTrigger.refresh();
    }else{
        readMoreBtn.textContent = "Read More";
        workPara.scrollIntoView({ behavior: "smooth" });
        ScrollTrigger.refresh();
    }
});
