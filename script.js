/*
 Creaded by  : Tsering Khando Lama c0916140
 */

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');
    canvas.style.cursor = 'url("pencil2.png"), auto';
    const brushSizeDisplay = document.getElementById('brushSize');
    let drawing = false;
    let brushSize = 2;
    let brushColor = '#000000';

    // Update brush size
    document.getElementById('slider').addEventListener('input', function (e) {
        brushSize = e.target.value;
        brushSizeDisplay.textContent = brushSize;
    });


    //   event listeners
    document.getElementById('black').addEventListener('click', function () {
        setColor('#000000');

    });

    document.getElementById('pink').addEventListener('click', function () {
        setColor('#F50057');
    });

    document.getElementById('blue').addEventListener('click', function () {
        setColor('#2979FF');
    });

    document.getElementById('yellow').addEventListener('click', function () {
        setColor('#FFD600');
    });

    // Eraser
    document.getElementById('erase').addEventListener('click', function () {
        setColor('#FFFFFF', true);
    });

    // Clear Canvas
    document.getElementById('new').addEventListener('click', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Start drawing
    canvas.addEventListener('mousedown', function (e) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    // Draw line
    canvas.addEventListener('mousemove', function (e) {
        if (drawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    // Stop drawing
    canvas.addEventListener('mouseup', function () {
        drawing = false;
    });

    canvas.addEventListener('mouseout', function () {
        drawing = false;
    });

    // Update the current drawing stroke
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    // Update brush size and color in real-time
    function updateBrush() {
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = brushColor;
        requestAnimationFrame(updateBrush);
    }

    // Set up brush color buttons and check if it's eraser
    function setColor(newColor, isEraser = false) {
        brushColor = newColor;
        // if eraser is selected change cursor to eraser
        if (isEraser) {
            canvas.style.cursor = 'url("erase.png"), auto';
        }
        else {
            canvas.style.cursor = 'url("pencil2.png"), auto';
        }
    }
    updateBrush();
});
