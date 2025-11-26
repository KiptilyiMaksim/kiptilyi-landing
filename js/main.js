const burgerMenu = document.querySelector('#toggleBurger');
const menuList = document.querySelector('#toggleBurgerList');
const bodyFilter = document.querySelector('#toggleBurgerBody');
const menuLinks = document.querySelectorAll('.header a');

burgerMenu.addEventListener('click', function () {
	bodyFilter.classList.toggle('burger-body__open');
	burgerMenu.classList.toggle('burger__open');
	menuList.classList.toggle('burger-list__open');
});
menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		bodyFilter.classList.remove('burger-body__open');
		burgerMenu.classList.remove('burger__open');
		menuList.classList.remove('burger-list__open');
	});
});
document.addEventListener('click', function (removeList) {
	if (bodyFilter.classList.contains('burger-body__open') &&
		!removeList.target.closest('#toggleBurger') &&
		!removeList.target.closest('#toggleBurgerList')) {
		bodyFilter.classList.remove('burger-body__open');
		burgerMenu.classList.remove('burger__open');
		menuList.classList.remove('burger-list__open');
	}
});

// Dropdown Menu Multilingual
document.addEventListener('DOMContentLoaded', function () {
	const dropdown = document.querySelector('.nav__dropdown');
	function closeDropdown() {
		dropdown.removeAttribute('open');
	}
	dropdown.addEventListener('click', function (e) {
		if (e.target.classList.contains('nav-dropdown__link')) {
			closeDropdown();
		}
	});
	document.addEventListener('click', function (e) {
		if (!dropdown.contains(e.target)) {
			closeDropdown();
		}
	});
	dropdown.addEventListener('click', function (e) {
		e.stopPropagation();
	});
});