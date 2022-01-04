const navbar = document.querySelector('.nav__navbar');
const navBtn = document.querySelector('.burger-btn');

const handleNav = () =>{
    navbar.classList.toggle('nav__navbar--active')
};

navBtn.addEventListener('click', handleNav)