var colorPicker = document.querySelector('.color-picker');
var buttons = colorPicker.querySelectorAll('button');
var sizeBtn = document.querySelector('.btn-size');
var resetBtn = document.querySelector('.btn-reset');
var canvas = document.querySelector('.canvas');
var pixel = document.createElement('div');
var drawingColor = 'black';
var eraserBtn = document.querySelector('.btn-eraser');
pixel.className = 'pixel';

generateCanvas(10);

sizeBtn.addEventListener('click', (Event) => {
	wipeCanvas();
	var n = prompt('Input a number between 10 and 100: ', 'Number here');
	while (isNaN(n) || n < 10 || n > 100) {
		n = prompt('Input a number between 10 and 100: ', 'Number here');
	}
	generateCanvas(parseInt(n));
});

colorPicker.addEventListener('click', (Event) => {
	drawingColor = Event.target.id;
});

resetBtn.addEventListener('click', (Event) => {
	wipeCanvas();
});

buttons.forEach((button) => {
	button.style.backgroundColor = button.id;
});

canvas.addEventListener('mousemove', (Event) => {
	if (mouseDown && Event.target.className == 'pixel') {
		Event.target.style.backgroundColor = drawingColor;
	}
});

var mouseDown = 0;
document.body.onmousedown = function () {
	mouseDown = 1;
};
document.body.onmouseup = function () {
	mouseDown = 0;
};

function generateCanvas(playerChoice) {
	let size = parseInt(getComputedStyle(canvas).height) / playerChoice;

	pixel.style.height = size + 'px';
	pixel.style.width = size + 'px';
	for (let i = 0; i < playerChoice; i++) {
		for (let j = 0; j < playerChoice; j++) {
			canvas.appendChild(pixel.cloneNode(true));
		}
	}
}

function wipeCanvas() {
	const pixels = document.querySelectorAll('.pixel');
	i = pixels.length;
	while (i > 0) {
		canvas.removeChild(canvas.lastChild);
		i--;
	}
}
