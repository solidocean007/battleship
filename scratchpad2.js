const boardLetters = [".", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const size = 10;

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



