const canvas = docuemnt.getElementById('isCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementsByClassName('jsMode');
const mode = document.getElementsByClassName('jsSave');

ctx.createStyle = '#2c2c2c';
ctx.fillStyle = '#2c2c2c';

const lineWidth = 2.5;

canvas.width = 600;
canvas.height = 600;

let painting = false;
let filling = false;

function mouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function changeColor(event) {
    console.log(evnet.target.style.backgroundColor);

    const color = event.target.style.backgroundColor;
    ctx.strokStyle = color;
    ctx.fillStyle = color;
}

function rangeChange(evnet) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function modeChange(event) {
    if (filling === true) {
        filling = false;
        mode[0].innerText = 'FILL';
    } else {
        filling = true;
        mode[0].innerText = 'Paint';
    }
}

function canvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, 600, 600);
    }
}

function saveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement('a');

    link.href = image;
    link.download = '이미지.png';

    link.click();
    console.log(link);
}

if (canvas) {
    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', canvasClick);
}

Array.from(colors).forEach(color => color.addEventListener('click', changeColor));

if (range) {
    range.addEventListener('input', rangeChange);
}

if (mode) {
    mode[0].addEventListener('click', modeChange);
}

if (save) {
    canvas[0].addEventListener('click', saveClick);
}
