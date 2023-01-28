const boardLetters = [".", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const size = 10;

// This function creates a random number bigger than the length of a ship
function randNum(length) {
  let x = 0;
  do{
    x = Math.ceil(Math.random() * 10);
  } while( x - length < 0)
  return x
}


/* This function builds an array of objects 
  that represent the plots of the board. */

function gameBoardData(size) {
  let gameBoard = [];
  for (let i = 1; i <= size; i++) {
    let xChar = boardLetters[i];
    for (let j = 1; j <= size; j++) {
      let yNumber = j;
      gameBoard.push({
        id: xChar + yNumber,
        occupied: false,
      });
    }
  }
  return gameBoard;
}

let board = gameBoardData(size);
console.log(board)


function leftToRightShipMaker(length) {
  let shipArray = [];
  let yNumber = 0;
  let xLetter = '';
  // I need to call the random direction in this function and rename this function to ship builder
    do {
      xLetter = boardLetters[randNum()];
      yNumber = randNum(length) - length;
      for (let i = 1; i <= length; i++) {
        board.find((plot) => plot.id === (xLetter + yNumber + i)).occupied = true;
        shipArray.push(xLetter + (yNumber + i));
    }
  
    } while (yNumber < 0 );
    // console.log(yNumber + " : is yNumber");
    
    // console.log(board.filter(a => a.id === (xLetter + yNumber)))
  
    console.log(shipArray);
  
}

leftToRightShipMaker(3);
console.log(board)

