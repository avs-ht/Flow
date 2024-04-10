const burgerButton = document.querySelector('.header__burger')
const navigationContainer = document.querySelector('.header__nav-container')
burgerButton.addEventListener('click', () => {
	burgerButton.classList.toggle('active')
	navigationContainer.classList.toggle('active')
})
