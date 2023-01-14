const boardSize = 3;
const numberOfFoes = 2;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
const enemyBoats = [];
const boardValues = ['1','2','3','4','5','6','7','8','9','10'];

// this function creates enemy boats and assigns them a letter and a number.
function createEnemyTargets(numberOfBadGuys){
  for( let shipCount = 0; shipCount < numberOfBadGuys; shipCount++) {
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
      let newShip =  (xCoord + yCoord); 
      console.log(newShip);
      enemyBoats.push(newShip);
    }
    return enemyBoats;
    
}

createEnemyTargets(numberOfFoes);

console.log(enemyBoats);

var readlineSync = require('readline-sync');
// Wait for user response.
if(readlineSync.keyIn('Press any key to start the game.   ')) {
  }


readlineSync.setDefaultOptions({limit: boardLetters});
xAnswer = (readlineSync.question('Enter a location to strike ie "A2" A - J')).toLocaleUpperCase();

readlineSync.setDefaultOptions({limit: boardValues});
yAnswer = readlineSync.question('1 - 10');

let playerShot = (`${xAnswer + yAnswer}`)
console.log(playerShot);
console.log('Type of playerShot is: '+ typeof playerShot);
console.log(typeof enemyBoats);


if(playerShot in enemyBoats){
  console.log('Hit and sunk!')
} else {
  console.log(enemyBoats);
}