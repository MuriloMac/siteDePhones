// Header On Scroll Color Change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// Remove Menu On Click Any Menu Link
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active');
}

//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay:400, 
    //reset: true
})
sr.reveal('.home-tex, .buds-text', {origin: 'left'})
sr.reveal('.home-img, .buds-img', {origin:'right'})
sr.reveal('.heading', {dalay: 200})
sr.reveal('.specs-datails .box', {origin:'left', interval:100})
sr.reveal('.specs-img', {dalay: 600})
sr.reveal('.shop-container .box, .footer .logo, .footer .footer-box', {interval:150})
