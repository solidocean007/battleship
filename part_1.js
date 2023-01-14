const boardSize = 3;
let numberOfFoes = 2;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
let enemyBoats = [];
const boardValues = ['1','2','3','4','5','6','7','8','9','10'];
const shotLocations = [];
let playerShot = '';

// this function creates enemy boats and assigns them a letter and a number.
function createEnemyTargets(totalTargets){
  let shipCount = 0;
  let newShip;
  let xCoord;
  while(shipCount < totalTargets) { 
      xCoord = Math.floor(Math.random() * (boardSize) + 1)
      xCoord = boardLetters[xCoord];
      let yCoord = Math.floor(Math.random() * (3) + 1)
      newShip = (xCoord + yCoord); 
      if(enemyBoats.indexOf(newShip) === -1){
        enemyBoats.push(newShip);
        shipCount++
      }
    }  
}
// This function creates a board.
function buildGrid(size){
  // create board pieces without middle block
  const lineOnTop = ' ______ ';
  const boxSpace = '|      |';
  // no middle block
  const bottom = `|______|`;
  // create the length of the pieces without the middle block
  const topLine = lineOnTop.repeat(size);
  const nextLine = boxSpace.repeat(size);
  

  for(let xPlotter = 0; xPlotter < size; xPlotter++) {
    console.log(topLine);
    console.log(nextLine);
    let string = '';
    for(let i = 0; i < size; i++){
      letterValue = boardLetters[xPlotter];
      const board = [];
      board[xPlotter] = { letterValue : xPlotter};

      string += `|      |`;
    }
    console.log(string);

    let bottomLine = bottom.repeat(size);
    console.log(bottomLine);
  }
}
 // This function builds an array of objects that represent the plots of the board.
 function gameBoardData(size) {
 let gameBoardData = [];
 for(let i = 0; i < size; i++) {
   let xChar = boardLetters[i];
   for(let j = 0; j < size; j++) {
     let yNumber = boardValues[j];
     gameBoardData.push(xChar + yNumber)
   }
 }
 return gameBoardData;
}
// This function gets the users shot at the enemy location.
function takeYourShot(){
  readlineSync.setDefaultOptions({limit: boardLetters});
  xAnswer = (readlineSync.question('Enter a location to strike ie "A2" A - J'))
    .toLocaleUpperCase();
  readlineSync.setDefaultOptions({limit: boardValues});
  yAnswer = readlineSync.question('1 - 10');
  playerShot = String([xAnswer + yAnswer])
  shotLocations.push(playerShot);
}


//Game play begins here!!
var readlineSync = require('readline-sync');
// Wait for user response.
if(readlineSync.keyIn('Press any key to start the game.   ')) {
  }

// Draw the board in the terminal.
console.log(buildGrid(boardSize));

 // Create the enemy ships 
createEnemyTargets(numberOfFoes);
console.log(enemyBoats) // this line is just for testing


while( numberOfFoes > 0 ){
  takeYourShot()

  if(enemyBoats.indexOf(playerShot) !== -1){
    enemyBoats = enemyBoats.filter(element => element !== playerShot);
    console.log(enemyBoats);
    numberOfFoes--
    console.log(`Hit. You have sunk a battleship. ${numberOfFoes} ship remaining.`)
  } else {
    console.log('miss me ha ha!');
  }
} console.log ('Game over!!')


// ** But `promptCL` method should be used instead of this. **

  // for(i = 0; i < boardLength; i++) {
  //   console.log(middleLine);
    // console.log(nextLine);
    // console.log(nextLine);
  // }





