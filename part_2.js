const boardSize = 10;
const boardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// const shotLocations = [];
// let endGame = false;

// This function creates a board.
function buildGrid(size) {
  // create board pieces without middle block
  const lineOnTop = " ______ ";
  const boxSpace = "|      |";
  // no middle block
  const bottom = `|______|`;
  // create the length of the pieces without the middle block
  const topLine = lineOnTop.repeat(size);
  const nextLine = boxSpace.repeat(size);

  for (let xPlotter = 0; xPlotter < size; xPlotter++) {
    console.log(topLine);
    console.log(nextLine);
    let string = "";
    for (let i = 0; i < size; i++) {
      letterValue = boardLetters[xPlotter];
      const board = [];
      board[xPlotter] = { letterValue: xPlotter };

      string += `|      |`;
    }
    console.log(string);

    let bottomLine = bottom.repeat(size);
    console.log(bottomLine);
  }
}

// This function builds data plots of the board.
function gameBoardData(size) {
  let gameBoard = [];
  for (let i = 0; i < size; i++) {
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

/* This function return random 'vertical' or 'horizontal' */
function whichWay() {
  theWay = Math.random() > 0.5 ? "vertical" : "horizontal";
  // console.log(theWay);
  return theWay;
}

// This function creates a random Letter for the x-axis
function getLetter(){
  return boardLetters[Math.floor(Math.random() * boardLetters.length)]
}

// This function creates a random number
function getNumber() {
  return Math.ceil(Math.random() * 10)
}

// This function gets the users shot at the enemy location.
function takeYourShot() {
  shotInput = readlineSync.question('Enter a location to strike ie "A2"   ');
  playerShot = shotInput.toLocaleUpperCase();
  if (shotLocations.includes(playerShot)) {
    console.log("You have already picked this location. Miss!");
    takeYourShot();
  }
  shotLocations.push(playerShot);
  console.log("playerShot: " + shotLocations);
}

/* This function takes a spot, length and direction and builds 
  an array of possible locations */
function buildArrayOfPlots(spot, length, direction){
    let plots = [];
    let xLetter = spot.slice(0,1);
    let yNumber = Number(spot.slice(1));
    if(direction === 'horizontal'){
      for(let i = 0; i < length; i++){
        plots.push(xLetter + Number(yNumber + i))
      }
      return plots;
    } else {
      let letterPlace = boardLetters.indexOf(xLetter);
    for(let i = 0; i < length; i++){
      plots.push(boardLetters[letterPlace + i] + yNumber)
    }
    return plots;
    }
}

// This function returns true if ship spots are real board spots
function checkForRoom(shipSpots, realSpots) {
  for (const plot of shipSpots) {
    const actualSpot = realSpots.find(spot => spot.id === plot);
    if (!actualSpot || actualSpot.occupied) {
      return false;
    } else {
      actualSpot.occupied = true;
    }
  }

  return true;
}



const size = boardSize;
let board = gameBoardData(size)
let allShipsArray = [];
let shipFive = [];
let shipFour = [];
let shipThreeTwo = [];
let shipThreeOne = [];
let shipTwo = [];

function shipBuilder(boatLength, ship) {
  let verticalOrHorizontal;
  let startSpot;
  do {
    verticalOrHorizontal = whichWay();
    startSpot = getLetter() + getNumber();
    ship = buildArrayOfPlots(startSpot, boatLength, verticalOrHorizontal);
  } while (!checkForRoom(ship, board));
  console.log("ship: " + ship);
  return ship
}

shipFive = shipBuilder(5, shipFive)
shipFour = shipBuilder(4, shipFour)
shipThreeOne = shipBuilder(3, shipThreeOne)
shipThreeTwo = shipBuilder(3, shipThreeTwo)
shipTwo = shipBuilder(2, shipTwo)

allShipsArray = [shipFive, shipFour, shipThreeOne, shipThreeTwo, shipTwo];

console.log("gameBoardData with updated occupied values: ", board);
console.log(allShipsArray)



//Game play begins here!!
do {
  var readlineSync = require("readline-sync");
  // Wait for user response.
  if (readlineSync.keyIn("Press any key to start the game.   ")) {
  }
  // Draw the board in the terminal.
  console.log(buildGrid(boardSize));

  
  while (numberOfFoes > 0) {
    takeYourShot();
    if (enemyBoats.includes(playerShot)) {
      console.log("playerShot found"); // this line is just for testing

      enemyBoats = enemyBoats.filter((element) => element !== playerShot);
      console.log(enemyBoats);
      numberOfFoes--;
      console.log(
        `Hit. You have sunk a battleship. ${numberOfFoes} ship remaining.`
      );
    } else {
      console.log("miss me ha ha!");
    }
  }
  endGame = readlineSync.keyInYN(
    "You have destroyed all battleships. Would you like to play again? Y/N"
  );
  console.log(endGame);
} while (endGame);

