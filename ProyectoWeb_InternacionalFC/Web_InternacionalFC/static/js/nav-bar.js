const ham = document.querySelector('.ham')
const enlaces =document.querySelector('.enlaces-menu')
const baras=document.querySelectorAll('.ham span')

ham.addEventListener('click',()=>{
    enlaces.classList.toggle('activado');
    baras.forEach(child => {child.classList.toggle('animado')});
});

gsap.from("#logo", {duration: 3, x: 300, opacity: 0, scale: 0.5});

let tween = gsap.from('.circle', {
            duration: .3,
            y: -200, //'random(-500,500)',
            scale: 0,
            stagger: 0.5,
            //delay: 2 // it's better to use timeline
        });