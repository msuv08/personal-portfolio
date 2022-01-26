/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200){
        header.classList.add('scroll-header'); 
    } else {
        header.classList.remove('scroll-header');
    }   
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll'); 
    } else {
        scrollTop.classList.remove('show-scroll');
    }   
}
window.addEventListener('scroll',scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portfolio__container',{
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        clampHeight: false,
        clampWidth: false,
        duration: 1000,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        animateResizeTargets: true
    }
});
/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/*===== SWIPER CAROUSEL =====*/ 
const swiper = new Swiper('.hobbies__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
})

/*===== GSAP ANIMATION =====*/ 

let t0 = gsap.timeline({
    scrollTrigger: "#home",
});

function init(){
    t0.from('#home, #header', {autoAlpha:0, duration: 0.000000000000000000000000000000000000000000000001}, "0")
    t0.from('.home__img', {autoAlpha:0, duration:2, delay:.5, x:60}, "0")
    t0.from('.home__data', {autoAlpha:0, duration:2, delay:.8, y:25}, "0")
    t0.from('.home_greeting, .home__name, .home__profession, .home__button', {autoAlpha:0, duration:2, delay:1, y:25, ease:'expo.out', stagger:.2}, "0")
    t0.from('.nav__logo, .nav__toggle', {autoAlpha:0, duration:2, delay:1.5, y:25, ease:'expo.out', stagger:.2}, "0")
    t0.from('.nav__item', {autoAlpha:0, duration:2, delay:1.8, y:25, ease:'expo.out', stagger:.2}, "0")
    t0.from('.home__social-icon', {autoAlpha:0, duration:2, delay:2.3, y:25, ease:'expo.out', stagger:.2}, "0")
}


let t1 = gsap.timeline({
    scrollTrigger: {
        trigger:'#about',
        // markers:true,
        start: "top 80%"
    }
});

t1.from('.about__img', {opacity:0, duration:2, delay:.2, x:60})
.from('.about__header, .about__me, .about__description, .about__number, .about_achievement', {opacity:0, duration: 2, delay:.2, y:25, ease:'expo.out', stagger:.1}, "-=2.2")

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger:'.qual__content',
        // markers:true,
        start: "top 90%"
    }
});

let t3 = gsap.timeline({
    scrollTrigger: {
        trigger:'.education__content',
        // markers:true,
        start: "top 90%"
    }
});

t2.from('.qual__subheader, .qual__header, .qual__title, .qual__data, .qual__area, .qual__work', {opacity:0, duration: 2, delay:.2, y:25, ease:'expo.out', stagger:.1})
t3.from('.education__title, .education__data, .education__area, .education__work', {opacity:0, duration: 2, delay:.2, y:25, ease:'expo.out', stagger:.1},"+=0.2")

let t4 = gsap.timeline({
    scrollTrigger: {
        trigger:'.skills__section',
        // markers:true,
        start: "top 80%"
    }
});
t4.from('.skills__data, .skills__header, .skills__title', {opacity:0, duration: 2, delay:.2, y:40, ease:'expo.out', stagger:.1})

let t5 = gsap.timeline({
    scrollTrigger: {
        trigger:'.project__container',
        // markers:true,
        start: "top 85%"
    }
});
t5.from('.project__container, .project__data, .project__title, .project__description', {opacity:0, duration: 2, delay:.2, y:40, ease:'expo.out', stagger:.1})

let t6 = gsap.timeline({
    scrollTrigger: {
        trigger:'.portfolio__section',
        // markers:true,
        start: "top 90%"
    }
});
t6.from('.portfolio__title, .portfolio__subtitle, .portfolio__nav, .portfolio__item, .portfolio__content, .button-link', {opacity:0, duration: 2, delay:.2, y:40, ease:'expo.out', stagger:.075})

let t7 = gsap.timeline({
    scrollTrigger: {
        trigger:'.hobbies__section',
        // markers:true,
        start: "top 90%"
    }
});
t7.from('.hobbies__title, .hobbies__subtitle, .hobbies__content, .hobbies__description, .hobbies__client, .swiper-pagination', {opacity:0, duration: 2, delay:.2, y:40, ease:'expo.out', stagger:.045})

let t8 = gsap.timeline({
    scrollTrigger: {
        trigger:'.contact__section',
        // markers:true,
        start: "top 80%"
    }
});
t8.from('.contact__maintitle, .contact__subtitle, .contact__box, .contact__description', {opacity:0, duration: 2, delay:.2, y:40, ease:'expo.out', stagger:.1})

let t9 = gsap.timeline({
    scrollTrigger: {
        trigger:'.contact__form',
        // markers:true,
        start: "top 90%"
    }
});
t9.from('.send__title, .send__subtitle, .contact__inputs, .contact__button, .contact__input, .recaptcha__tag', {opacity:0, duration: 2, delay:.2, y:40, ease:'expo.out', stagger:.1})

window.addEventListener("load", function(event){
    init();
});