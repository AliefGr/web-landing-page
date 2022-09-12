const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle('scrolling-active', positionWindow);
    sideBar.classList.remove('menu-active')
});


// humburger menu
const menuBar = document.querySelector('.ri-menu-line');
const sideBar = document.querySelector('.navigation');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('menu-active');
});

// close clik

const close = document.querySelector('.ri-close-line');

close.addEventListener('click', () => {
    sideBar.classList.remove('menu-active');
});

// typing animation

const typed = new Typed('.typing', {
    strings: ['Alief Gr', 'Mahasiswa'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

const typedAbout = new Typed('.typing-about', {
    strings: ['Alief Gymnatiar', 'Mahasiswa', 'Content Creator', 'Junior Web Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
