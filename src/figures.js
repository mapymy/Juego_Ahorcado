'use strict';
const shapes=[drawSquare, drawTriangle, drawCircle];
const shapesColors = [];

function drawSquare({x=0, y=0, ctx}) {
    applyFigureContext(ctx);
    ctx.strokeStyle = shapesColors[0];
    ctx.strokeRect(x,y,100,100);
    ctx.restore();
}

function drawTriangle({x=0,y=0,ctx}) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+70, y-100);
    ctx.lineTo(x+140, y);
    ctx.closePath();
    applyFigureContext(ctx);
    ctx.strokeStyle = shapesColors[1];
    ctx.stroke();
    ctx.restore();
}

function drawCircle({x=0,y=0, ctx, radius}) {
    applyFigureContext(ctx);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = shapesColors[2];
    ctx.stroke();
    ctx.restore();
}

// Aplica los estilos compartidos de grosor de linea y sombra para las figuras
function applyFigureContext(ctx, lineW=25, shadColor=shadow1 , shadBl = 25) {
    ctx.lineWidth = lineW;
    ctx.shadowColor = shadColor;
    ctx.shadowBlur = shadBl;
}

function drawFigures({ctx, increment}) {

    const radius = 70;
    while(shapes.length > shapesColors.length){
        const colorShape = getRandomElementOfList(allColors);
        shapesColors.push(colorShape)
    }
    

    drawSquare({x: 100+increment, y:  -100+increment, ctx});
    drawCircle({x: 1500-increment, y: 200, ctx, radius});
    drawTriangle({x: 1000-increment, y: 1000-increment, ctx});
    drawSquare({x: 20 + increment,y: 50, ctx, increment });
    drawTriangle({x: 300+increment, y: 500-increment, ctx});
    drawCircle({x: 150-increment, y: 20+increment, ctx, radius});
    drawSquare({x: 800-increment, y:  -400+increment, ctx});
    drawTriangle({x: 800+increment, y: increment, ctx});
}