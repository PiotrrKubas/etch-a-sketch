var colorPicker = document.querySelector('.color-picker');
var buttons = colorPicker.querySelectorAll('button');
var sizeBtn = document.querySelector('.btn-size');
var resetBtn = document.querySelector('.btn-reset');
var canvas = document.querySelector('.canvas');

sizeBtn.addEventListener('click', (Event) => {
	wipeCanvas();
	var n = prompt('Input a number: ', 'Number here');
	while (!parseInt(n)) {
		n = prompt('Input a number: ', 'Number here');
	}
	generateCanvas(parseInt(n));
});

resetBtn.addEventListener('click', (Event) => {
	wipeCanvas();
});

buttons.forEach((button) => {
	button.style.backgroundColor = button.id;
});

function generateCanvas(playerChoice) {
	let size = parseInt(getComputedStyle(canvas).height) / playerChoice;

	let pixel = document.createElement('div');
	pixel.className = 'pixel';
	pixel.style.height = size + 'px';
	pixel.style.width = size + 'px';
	for (let i = 0; i < playerChoice; i++) {
		for (let j = 0; j < playerChoice; j++) {
			canvas.appendChild(pixel.cloneNode(true));
		}
	}
	//for loop for creating row based on size selected by player
	//nested for loop for creating 'pixel' inside rows
}

function wipeCanvas() {
	const pixels = document.querySelectorAll('.pixel');
	i = pixels.length;
	while (i > 0) {
		canvas.removeChild(canvas.lastChild);
		i--;
	}
}
