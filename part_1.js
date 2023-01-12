const boardSize = 3;
var readlineSync = require('readline-sync');
// Wait for user response.
if (readlineSync.keyIn('Press any key to start the game.   ')) {
}
// Place enemy ships on the board

function buildGrid(size){ 
  // create board pieces without middle block
  const lineOnTop = ' ______ ';
  const boxSpace = '|      |';
  // no middle block
  const bottom = `|______|`;
  // create the length of the pieces without the middle block
  const topLine = lineOnTop.repeat(size);
  const nextLine = boxSpace.repeat(size);
}
// console.log(buildGrid(boardSize));

// Create data plots for board.
function gameBoardData(size){
  let gameBoardData = [];
  const letters = 'ABCDEFGHIJ';                               // declare letter string for x coordinates                              // begin cycling through letters
  const values = ['1','2','3','4','5','6','7','8','9','10'];
    for(let i = 0; i < size; i++) {
      let xChar = letters[i];
      for(let j = 0; j < size; j++) {
        let yNumber = values[j];
        gameBoardData.push({[[xChar]+[yNumber]]: null})
      }
    }
  }
  console.log(gameBoardData(boardSize));



const numberOfEnemys = 2;

for( let targets = 0; targets < numberOfEnemys; targets++) {
  let xCoord = Math.floor(Math.random() * (boardSize) + 1)
  console.log(xCoord);

  if(xCoord === 1){ 
    xCoord = 'A'
  } else if(xCoord === 2){ 
    xCoord = 'B'
  } else if (xCoord === 3){ 
    xCoord = 'C'
  };

  let yCoord = Math.floor(Math.random() * (3) + 1)

  const firstEnemyShip = ({[xCoord + yCoord]: null}); 
  console.log(firstEnemyShip);
  console.log(`Testing: Enemy Ship is at: ${[firstEnemyShip]}.`);

}


  // for(let xPlotter = 0; xPlotter < size; xPlotter++) {    //setup loop the length of the board
  //   console.log(topLine);
  //   console.log(nextLine);
  //   let string = '';
  //   for(let i = 0; i < size; i++){   
  //     const letters = 'ABCDEFGHIJ';                               // declare letter string for x coordinates                              // begin cycling through letters
  //     letterValue = letters[xPlotter];                            // grab a letter
  //     const board = [];                                             // initialize box plot container
  //     board[xPlotter] = { letterValue : xPlotter}
  //     string += `|  ${board[xPlotter]}  |`;
  //   }
  //   console.log(string);

  //   let bottomLine = bottom.repeat(size);
  //   console.log(bottomLine);
  // }
  
  // for(i = 0; i < boardLength; i++) {
  //   console.log(middleLine);
    // console.log(nextLine);
    // console.log(nextLine);
  // }





