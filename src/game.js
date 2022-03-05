const game = {};

function start() {
    var myFont = new FontFace('squidFont', 'url(./fonts/game_of_squids-webfont.otf)');
    myFont.load().then(function(font){
      document.fonts.add(font);
      ctx.font = "55px squidFont";
    });

    drawWordLines();
    drawHearts();
    
    document.addEventListener('keydown', checkKey);
}

function drawWordLines () {
  const wordXPositions = [];
  const playingWord = getRandomElementOfList(wordsList);
  const wordParts = playingWord.split(' ');
  game.playingWord = playingWord.toUpperCase().replace(/\s/g, '');
  const availableSpace =  (canvas.width - 60) - (25 * wordParts.length);
  const partsOfWord = splitOnEqualParts(availableSpace, wordParts.length)
  let posX = 30;
  wordParts.map((word, i) => {
    const numberOfLines = word.length;
    let sizesOfLines = splitOnEqualParts(partsOfWord[i] - (10 * word.length),numberOfLines)
    sizesOfLines.map((size) => {
      ctx.beginPath();
      ctx.strokeStyle = white;
      ctx.lineWidth = 5;
      wordXPositions.push([posX,size])
      ctx.moveTo(posX, 250);
      ctx.lineTo(posX+size, 250);
      ctx.stroke();
      posX = posX + 5 + size;
    })
    posX = posX + 25;
  });
  game.wordXPositions=wordXPositions;
  game.numberOfChars = wordXPositions.length;
}

function drawHearts() {
  const heartPositions = [];
  const posX = (canvas.width / 2) - ((game.numberOfChars/2 * 60) /2);
  let initPosX = posX;
  game.wordXPositions.map((c, i) => {
    if(i%2 === 0) {
      heartPositions.push(initPosX);
      drawImage({src:"./assets/guard.png",x:initPosX,y:320,w:50,h:60});
      initPosX = initPosX + 60;
    }
  })
  game.heartPositions = heartPositions;
}

function showChar(char, indexes) {
  ctx.fillStyle = white;
  indexes.map(index => {
    const posX = game.wordXPositions[index][0] + (game.wordXPositions[index][1]/2) - 20
    ctx.fillText(char, posX, 240);
  })
}

function endGame(won) {
  showGameOver(won);
  game.onGameOver = true;
}

function lostLife() {
  const hPosX = game.heartPositions.pop();
  drawImage({src:"./assets/x.png",x:hPosX-5, y:320, w:60, h:60});
  if (!game.heartPositions.length) {
    endGame(false);
  }
}

function checkKey(event) {
  if (event.isComposing || event.keyCode === 229 || game.onGameOver || !playing) {
    return;
  }
  const key = event.key.toUpperCase();
  let indexes=[], i=-1;
  
  while((i = game.playingWord.indexOf(key, i+1)) >= 0){
    indexes.push(i);
    game.numberOfChars = game.numberOfChars - 1;
  } 
  if (game.numberOfChars === 0) endGame(true);
  if (!indexes.length) return lostLife();
  showChar(key,indexes);
}

function addNewWord(textArea) {
  if(!!textArea.value && typeof textArea.value === 'string' || textArea.value instanceof String) {
    wordsList.push(textArea.value);
  }
  textArea.value = '';
}

function restart() {
  game.onGameOver = false;
}

game.start = start;
game.addNewWord = addNewWord;
game.restart = restart;
game.endGame = endGame;