const boardSize = 3;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
let endGame = true;



// this function creates enemy boats and assigns them a letter and a number.
function createEnemyTargets(totalTargets, enemyBoats){
  let shipCount = 0;
  let newShip;
  let xCoord;
  let yCoord;
  while(shipCount < totalTargets) { 
      xCoord = boardLetters[Math.floor(Math.random() * (boardSize))]
      yCoord = Math.floor(Math.random() * (boardSize) + 1)
      newShip = (xCoord + yCoord); 
      if(enemyBoats.indexOf(newShip) === -1){
        enemyBoats.push(newShip);
        shipCount++
      }
    }  
}

// This function gets the users shot at the enemy location.
function takeYourShot(){
  shotInput = readlineSync.question('Enter a location to strike ie "A2"   ');
  playerShot = shotInput.toLocaleUpperCase()
  if(shotLocations.includes(playerShot)){
    console.log('You have already picked this location. Miss!');
    takeYourShot();
  }
  shotLocations.push(playerShot);
}

let enemyBoats = [];
let playerShot = '';
const shotLocations = [];


do{
let numberOfFoes = 2;

var readlineSync = require('readline-sync');
   //Game play begins here!!
   // Wait for user response.
   if(readlineSync.keyIn('Press any key to start the game.   ')) {
     }
 
   // Create the enemy ships 
   createEnemyTargets(numberOfFoes, enemyBoats);
   console.log(enemyBoats)
 
   while( numberOfFoes > 0 ){
     takeYourShot()
     if(enemyBoats.includes(playerShot)){  
       enemyBoats = enemyBoats.filter(element => element !== playerShot);
       numberOfFoes--
       console.log(`Hit. You have sunk a battleship. ${numberOfFoes} ship remaining.`)
     } else {
       console.log('miss me ha ha!');
     }
   } 
   endGame = readlineSync.keyInYN('You have destroyed all battleships. Would you like to play again? Y/N')
   if(endGame === 'Y') {
    enemyBoats = [];
    shotLocations = [];
    playerShot = '';
    endGame = false;
   }
   }  while (endGame)
