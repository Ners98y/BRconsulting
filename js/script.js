const navbar = document.querySelector('.nav__navbar');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__navbar-item');

const handleNav = () => {
	navbar.classList.toggle('nav__navbar--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navbar.classList.remove('nav__navbar--active');
		});
	});
};

navBtn.addEventListener('click', handleNav);
