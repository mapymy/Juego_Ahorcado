'use strict';

const btnStartGame = document.getElementById('iniciar-juego');
const btnAddWord = document.getElementById('agregar-palabra');
const btnRestart = document.getElementById('reiniciar-juego');
const btnRestartM = document.getElementById('reiniciar-juego-m');


const textArea = document.getElementById('newWord');
const gameContainer = document.getElementById('game-container');

const overlay = document.getElementById('game-over-overlay');
const gameOverContainer = document.getElementById('game-over-container');
const titleGmO = document.getElementById('title-gm-o');

const audio = document.getElementById('audio-song');
audio.muted = false;
audio.loop = true;
audio.autoplay = true;
document.body.addEventListener("mousemove", function () {
  audio.play();
});

btnStartGame.addEventListener('click', ()=> {
    showPlayingMenu([btnStartGame, btnAddWord, textArea], [gameContainer], true);
    setTimeout(() => {
      game.start();
    }, 1000);
   
});

btnAddWord.addEventListener('click', ()=> {
    game.addNewWord(textArea);
});

btnRestart.addEventListener('click', restartBtn);
btnRestartM.addEventListener('click', restartBtn);

function restartBtn () {
  overlay.classList.add('hide-element');
  gameOverContainer.classList.add('hide-element');
  showPlayingMenu([gameContainer], [btnStartGame, btnAddWord, textArea], false);
  restartBackgroundValues();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.restart();
  resizeCanvas(canvas, drawBackground);
}

function showPlayingMenu(elementsToHide, elementsToShow, isPlaying) {
  hideBackground=isPlaying;
  if (isPlaying) speed=60; 
  elementsToHide.map(el => el.classList.add('puff-out-center'));
  elementsToShow.map(el => el.classList.remove('hide-element'));
  setTimeout(() => {
    if(isPlaying) {
      clearInterval(drawInterval);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    elementsToHide.map(el => {
      el.classList.remove('puff-out-center');
      el.classList.add('hide-element');
      playing=isPlaying;
    });
  }, 1000);
}

function showGameOver(won){
  if (won) {
    titleGmO.innerHTML = "Felicidades ganaste!"
  } else {
    titleGmO.innerHTML = "Game Over!"
  }
  overlay.classList.remove('hide-element');
  gameOverContainer.classList.remove('hide-element');
}
