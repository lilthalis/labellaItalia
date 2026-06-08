// REGISTRA O SCROLLTRIGGER

gsap.registerPlugin(ScrollTrigger);

// HERO

gsap.from(".hero-tag",{
    opacity:0,
    y:50,
    duration:1
});

gsap.from(".hero-title",{
    opacity:0,
    y:100,
    duration:1.5,
    delay:.3
});

gsap.from(".hero-description",{
    opacity:0,
    y:50,
    duration:1.2,
    delay:.6
});

gsap.from(".hero-buttons",{
    opacity:0,
    y:50,
    duration:1,
    delay:.9
});

// HISTORY

gsap.from(".history-image",{

    scrollTrigger:{
        trigger:".history",
        start:"top 80%"
    },

    opacity:0,
    x:-100,
    duration:1.3

});

gsap.from(".history-content",{

    scrollTrigger:{
        trigger:".history",
        start:"top 80%"
    },

    opacity:0,
    x:100,
    duration:1.3

});

// EXPERIENCE CARDS

gsap.from(".experience-card",{

    scrollTrigger:{
        trigger:".experience",
        start:"top 80%"
    },

    opacity:0,
    y:80,

    stagger:.2,
    duration:1

});

// DISHES

gsap.from(".dish-card",{

    scrollTrigger:{
        trigger:".featured-dishes",
        start:"top 80%"
    },

    opacity:0,
    y:80,

    stagger:.2,
    duration:1

});

// GALLERY

gsap.from(".gallery-grid img",{

    scrollTrigger:{
        trigger:".gallery",
        start:"top 80%"
    },

    opacity:0,
    scale:.8,

    stagger:.1,
    duration:1

});

// RESERVATION

gsap.from(".reservation-content",{

    scrollTrigger:{
        trigger:".reservation",
        start:"top 80%"
    },

    opacity:0,
    y:80,
    duration:1.5

});

// LOCATION

gsap.from(".location-content",{

    scrollTrigger:{
        trigger:".location",
        start:"top 80%"
    },

    opacity:0,
    y:50,
    duration:1

});

// FOOTER

gsap.from(".footer-content",{

    scrollTrigger:{
        trigger:".footer",
        start:"top 90%"
    },

    opacity:0,
    y:50,
    duration:1

});

// HEADER SCROLL

window.addEventListener("scroll",()=>{

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.8)";

    }else{

        header.style.background = "rgba(0,0,0,.25)";

    }

});