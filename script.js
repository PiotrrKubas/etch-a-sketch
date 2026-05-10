var colorPicker = document.querySelector('.color-picker');
var buttons = colorPicker.querySelectorAll('button');

buttons.forEach((button) => {
	button.style.backgroundColor = button.id;
});
