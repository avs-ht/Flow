const energyButtons = document.querySelectorAll('.energies__button')

energyButtons.forEach(button => {
	button.addEventListener('click', () => {
		energyButtons.forEach(btn => btn.parentNode.classList.remove('active'))
		button.parentNode.classList.add('active')
	})
})
