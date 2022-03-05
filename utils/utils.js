'use strict';

// Cambia el tamano del canvas basado en el tamaño del la ventana e inicializa el intervalo para pintar
function resizeCanvas(c, draw, interval = 40) {
    if(!c) return;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    if (drawInterval) clearInterval(drawInterval);
    drawInterval = setInterval(draw, interval);
}

// Cambia el valor de la velocidad para que cambie la posicion si es menor a un rango
function bounce(min=0, max=100){
    if (hideBackground) return speed;
    if(increment < min) {
        speed= -speed;
    }
    if(increment > max) {
        speed= -speed;
    }
}

// Obtienen un color random de los colores del tema
function getRandomElementOfList(list) {
    return list[Math.floor(Math.random()*list.length)];
}

// Obtiene un numero random en un rango
function randNum(min=0, max=10) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function drawImage ({src,x,y,w,h}){
   const drawing = new Image();
    drawing.src = src;
    drawing.onload = function() {
      ctx.drawImage(drawing,x,y, w, h);
    };
}

function splitOnEqualParts(number, n) {
    let a, values=[];
    while (number > 0 && n > 0) {
        if (a%2 == 0)
            a = Math.floor(number / n / 50) * 50;
        else
            a = Math.ceil(number / n / 50) * 50;
        number -= a;
        n--;
        values.push(a);
    }
    return values;
}