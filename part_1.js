
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
  
  // Create data plots for board.
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
  console.log(gameBoardData);
}

const boardSize = 10;
console.log(buildGrid(boardSize));

const numberOfEnemy = 2;

for( let targets = 0; targets < numberOfEnemy; targets++) {
  let xCoord = Math.floor(Math.random() * (boardSize) + 1)
  console.log(xCoord);

// switch (xCoord) {
//   case 1:
//     xCoord = 'A';
//     break;
//   case 2:
//     xCoord = 'B';
//     break;
//   case 3:
//     xCoord = 'C';
//     break;
//   case 4:
//     xCoord = 'D';
//     break;
//   case 5:
//     xCoord = 'E';
//     break;
//   case 6:
//     xCoord = 'F';
//     break;
//   case 7:
//     xCoord = 'G';
//     break;
//   case 8:
//     xCoord = 'H';
//     break;
//   case 9:
//     xCoord = 'I';
//     break;
//   case 10:
//     xCoord = 'J';
//     break;
// }

 xCoord === 1 ? xCoord = 'A'
        :xCoord === 2 ? xCoord = 'B'
        :xCoord === 3 ? xCoord = 'C'
        :xCoord === 4 ? xCoord = 'D'
        :xCoord === 5 ? xCoord = 'E'
        :xCoord === 6 ? xCoord = 'F'
        :xCoord === 7 ? xCoord = 'G'
        :xCoord === 8 ? xCoord = 'H'
        :xCoord === 9 ? xCoord = 'I'
        :xCoord = 'J'

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





