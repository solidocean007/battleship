const size = 10;
const boardLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let board = gameBoardData(size);
const shotLocations = [];
let endGame = false;

// Helper functions *******************************************

// 1. This function draws the board in the terminal.
function buildGrid(size, board) {
  // create board pieces without middle block
  const lineOnTop = " ______ ";
  const boxSpace = "|      |";
  // no middle block
  const bottom = `|______|`;
  // create the length of the pieces without the middle block
  const topLine = lineOnTop.repeat(size);
  const nextLine = boxSpace.repeat(size);

  for (let i = 0; i < size; i++) {
    console.log(topLine);
    console.log(nextLine);
    let string = "";
    for (let j = 0; j < size; j++) {
      string += `|  ${board[i + j].damage}  |`;
    }
    console.log(string);

    let bottomLine = bottom.repeat(size);
    console.log(bottomLine);
  }
}

// 2. This function builds data plots of the board.
function gameBoardData(size) {
  let gameBoard = [];
  for (let i = 0; i < size; i++) {
    let xChar = boardLetters[i];
    for (let j = 1; j <= size; j++) {
      let yNumber = j;
      gameBoard.push({
        id: xChar + yNumber,
        occupied: false,
        damage: "  ",
      });
    }
  }
  return gameBoard;
}

/* 3. This function return random 'vertical' or 'horizontal' */
function whichWay() {
  theWay = Math.random() > 0.5 ? "vertical" : "horizontal";
  // console.log(theWay);
  return theWay;
}

// 4. This function creates a random Letter for the x-axis
function getLetter() {
  return boardLetters[Math.floor(Math.random() * boardLetters.length)];
}

// 5. This function creates a random number
function getNumber() {
  return Math.ceil(Math.random() * 10);
}

// 6. This function gets the users shot at the enemy location.
function takeYourShot() {
  shotInput = readlineSync.question('Enter a location to strike ie "A2"   ');
  playerShot = shotInput.toLocaleUpperCase();
  if (shotLocations.includes(playerShot)) {
    console.log("You have already picked this location. Miss!");
    takeYourShot();
  }
  shotLocations.push(playerShot);
  return playerShot;
}

// If playerShot strikes boat remove that plot from boats array.
function sinkSectionOfBoat(shot, enemyFleet, board) {
  for (let i = 0; i < enemyFleet.length; i++) {
    for (let j = 0; j < enemyFleet[i].length; j++) {
      if (enemyFleet[i][j] === shot) {
        enemyFleet[i].splice(j, 1);
        console.log("You have hit a battleship!");
        let hitSpot = board.find((obj) => obj.id === shot);
        hitSpot.damage = "Hit";
        buildGrid(size, board)
        return;
      }
    }
  }
  console.log("You have missed!");
}

//This array checks if all ships are sunk
function checkIfAllSunk(arr) {
  let result = arr.every((ship) => ship.length === 0);
  return result;
}

/* This function takes a spot, length and direction and builds 
  an array of possible locations */
function buildArrayOfPlots(spot, length, direction) {
  let plots = [];
  let xLetter = spot.slice(0, 1);
  let yNumber = Number(spot.slice(1));
  if (direction === "horizontal") {
    for (let i = 0; i < length; i++) {
      plots.push(xLetter + Number(yNumber + i));
    }
    return plots;
  } else {
    let letterPlace = boardLetters.indexOf(xLetter);
    for (let i = 0; i < length; i++) {
      plots.push(boardLetters[letterPlace + i] + yNumber);
    }
    return plots;
  }
}

// This function builds a ship.
function shipBuilder(boatLength, ship, board) {
  let verticalOrHorizontal;
  let startSpot;
  do {
    verticalOrHorizontal = whichWay();
    startSpot = getLetter() + getNumber();
    ship = buildArrayOfPlots(startSpot, boatLength, verticalOrHorizontal);
  } while (!checkForRoom(ship, board));
  return ship;
}

// This function returns true if ship spots are real board spots
function checkForRoom(shipSpots, realSpots) {
  for (const plot of shipSpots) {
    const actualSpot = realSpots.find((spot) => spot.id === plot);
    if (!actualSpot || actualSpot.occupied) {
      return false;
    } else {
      actualSpot.occupied = true;
    }
  }
  return true;
}

// Create ships
do {
  let allShipsArray = [];
  let shipFive = [];
  let shipFour = [];
  let shipThreeTwo = [];
  let shipThreeOne = [];
  let shipTwo = [];

  shipFive = shipBuilder(5, shipFive, board);
  shipFour = shipBuilder(4, shipFour, board);
  shipThreeOne = shipBuilder(3, shipThreeOne, board);
  shipThreeTwo = shipBuilder(3, shipThreeTwo, board);
  shipTwo = shipBuilder(2, shipTwo, board);

  allShipsArray = [shipFive, shipFour, shipThreeOne, shipThreeTwo, shipTwo];

  console.log(allShipsArray);

  //Game play begins here!! ******************************************
  var readlineSync = require("readline-sync");
  // Wait for user response.
  if (readlineSync.keyIn("Press any key to start the game.   ")) {
  }
  // Draw the board in the terminal.
  console.log(buildGrid(size, board));

  do {
    let shot = takeYourShot();
    sinkSectionOfBoat(shot, allShipsArray, board);
    console.log(buildGrid(size, board));
  } while (!checkIfAllSunk(allShipsArray));

  endGame = readlineSync.keyInYN(
    "You have destroyed all battleships. Would you like to play again? Y/N"
  );
} while (endGame);
