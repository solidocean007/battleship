const boardSize = 3;
const numberOfFoes = 2;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
const enemyBoats = [];
const boardValues = ['1','2','3','4','5','6','7','8','9','10'];



// this function creates enemy boats and assigns them a letter and a number.
function createEnemyTargets(){
  const enemyBoats = [];
  for( let shipCount = 0; shipCount < numberOfFoes; shipCount++) {
    let xCoord = Math.floor(Math.random() * (boardSize) + 1)
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
      enemyBoats[shipCount] = String((xCoord + yCoord)); 
    }
    return String(enemyBoats);
    
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

const boardSize = 3;
console.log(buildGrid(boardSize));

// Create the enemy ships 
// console.log(createEnemyTargets());
createEnemyTargets();

// console.log([enemyBoats]);  // why doesn't this log the enemy boats?

const entries = Object.entries(enemyBoats);
console.log('entries: ' + entries)

readlineSync.setDefaultOptions({limit: boardLetters});
xAnswer = (readlineSync.question('Enter a location to strike ie "A2" A - J')).toLocaleUpperCase();

readlineSync.setDefaultOptions({limit: boardValues});
yAnswer = readlineSync.question('1 - 10');

let playerShot = String([xAnswer + yAnswer])
console.log(playerShot);
console.log('Type of playerShot is: '+ typeof playerShot);
console.log(typeof enemyBoats);


if(enemyBoats.includes(playerShot)){
  console.log('Hit and sunk!')
} else {
  console.log('miss me ha ha!');
}

// ** But `promptCL` method should be used instead of this. **

  // for(i = 0; i < boardLength; i++) {
  //   console.log(middleLine);
    // console.log(nextLine);
    // console.log(nextLine);
  // }





