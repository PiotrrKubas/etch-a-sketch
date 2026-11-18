var colorPicker = document.querySelector('.color-picker');
var buttons = colorPicker.querySelectorAll('button');
var sizeBtn = document.querySelector('.btn-size');
var resetBtn = document.querySelector('.btn-reset');
var eraserBtn = document.querySelector('.btn-eraser');
var rainbowBtn = document.querySelector('.btn-rainbow');
var canvas = document.querySelector('.canvas');
var pixel = document.createElement('div');
var drawingColor = 'black';
var isRainbow = 'false';
pixel.className = 'pixel';
const waitingInterval = 250;
const colors = [
	'red',
	'blue',
	'green',
	'lightgreen',
	'pink',
	'black',
	'gray',
	'lightgray',
	'yellow',
	'gold',
	'orange',
	'purple',
	'brown',
	'cyan',
	'magenta',
	'navy',
	'teal',
	'indigo',
	'violet',
	'chocolate',
];

generateCanvas(10);

eraserBtn.addEventListener('click', (Event) => {
	isRainbow = false;
	setTimeout(() => {
		drawingColor = 'white';
	}, waitingInterval);
	console.log('gumka');
});

rainbowBtn.addEventListener('click', (Event) => {
	isRainbow = true;
	setTimeout(rainbowDrawing, waitingInterval);
});

sizeBtn.addEventListener('click', (Event) => {
	isRainbow = false;
	wipeCanvas();
	var n = prompt('Input a number between 10 and 100: ', 'Number here');
	while (isNaN(n) || n < 10 || n > 100) {
		n = prompt('Input a number between 10 and 100: ', 'Number here');
	}
	generateCanvas(parseInt(n));
});

colorPicker.addEventListener('click', (Event) => {
	isRainbow = false;

	drawingColor = Event.target.id;
});

resetBtn.addEventListener('click', (Event) => {
	isRainbow = false;

	eraseCanvas();
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
function eraseCanvas() {
	const pixels = document.querySelectorAll('.pixel');
	pixels.forEach((pixel) => {
		pixel.style.backgroundColor = 'white';
	});
}

function wipeCanvas() {
	const pixels = document.querySelectorAll('.pixel');
	i = pixels.length;
	while (i > 0) {
		canvas.removeChild(canvas.lastChild);
		i--;
	}
}

function rainbowDrawing() {
	drawingColor = colors[getRandomInteger(0, colors.length - 1)];
	if (isRainbow) {
		setTimeout(rainbowDrawing, waitingInterval);
	}
}

const getRandomInteger = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min)) + min;
};
