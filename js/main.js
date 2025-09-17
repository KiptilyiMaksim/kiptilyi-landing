const burgerMenu = document.querySelector('#toggleBurger');
const menuList = document.querySelector('#toggleBurgerList');
const bodyFilter = document.querySelector('#toggleBurgerBody');

burgerMenu.addEventListener('click', function () {
	bodyFilter.classList.toggle('burger-body__open');
	burgerMenu.classList.toggle('burger__open');
	menuList.classList.toggle('burger-list__open');

});