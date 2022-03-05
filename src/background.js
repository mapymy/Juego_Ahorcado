'use strict';

let canvas, ctx, drawInterval, playing;
let increment = 0;
let speed = 1;
let hideBackground = false;

window.onload = function() {
    canvas = document.getElementById('main-canvas');
    ctx = canvas.getContext('2d');
    resizeCanvas(canvas, drawBackground);
    window.addEventListener('resize', resizeCanvas(canvas, drawBackground), false);
}

function restartBackgroundValues() {
    speed = 1;
    increment = 0;
    hideBackground = false;
    playing=false;
}

function drawBackground() {
    bounce(0, canvas.width);
    increment = increment + speed;
    ctx.globalCompositeOperation = 'destination-over';
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFigures({ctx, increment})
}