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

// Dialog script
// const dialog = document.querySelector('.contacts__dialog');
// const openModalButton = document.querySelector('.contacts__button');
// const closeModalButton = document.querySelector('.dialog-button__close');

// function openModalandBlockScroll() {
// 	dialog.showModal();
// 	document.body.classList.add('scroll-block');
// }

// function returnScroll() {
// 	document.body.classList.remove('scroll-block');
// }

// function close() {
// 	dialog.close();
// 	returnScroll();
// }

// openModalButton.addEventListener('click', openModalandBlockScroll);
// closeModalButton.addEventListener('click', () => {
// 	close();
// });

// function closeOnOverlayClick({ currentTarget, target }) {
// 	const dialog = currentTarget;
// 	const isOnOverlayClick = target === dialog;
// 	if (isOnOverlayClick) {
// 		close();
// 	}
// }

// dialog.addEventListener('click', closeOnOverlayClick);
// dialog.addEventListener('cancel', () => {
// 	returnScroll();
// });
const form = document.querySelector('.feedback__form');
const dialog = document.querySelector('.contacts__dialog');
const closeModalButton = document.querySelector('.dialog-button__close');

function openModalandBlockScroll() {
	dialog.showModal();
	document.body.classList.add('scroll-block');
}

function returnScroll() {
	document.body.classList.remove('scroll-block');
}

function close() {
	dialog.close();
	returnScroll();
}

closeModalButton.addEventListener('click', () => {
	close();
});

dialog.addEventListener('click', ({ currentTarget, target }) => {
	if (target === currentTarget) close();
});

dialog.addEventListener('cancel', returnScroll);

form.addEventListener('submit', (event) => {

	if (!form.checkValidity()) {
		event.preventDefault();
		return;
	}

	event.preventDefault();
	openModalandBlockScroll();
});