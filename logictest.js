var readlineSync = require('readline-sync');
let endGame = false;
do {
  let shotInput;
  while (shotInput !== 'R8'){
    shotInput = readlineSync.question('Select letter and number R8:   ');
    shotInput = shotInput.toLocaleUpperCase()
    console.log(shotInput)
  }
  endGame = readlineSync.keyInYN('You have destroyed all battleships. Would you like to play again? Y/N')
  console.log(endGame)
  }  while (endGame)
  



// const boardSize = 3;
// const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
// const boardValues = ['1','2','3','4','5','6','7','8','9','10'];
// const shotLocations = [];


// let numberOfFoes = 2;
// let enemyBoats = [];
// let playerShot = '';
// // this function creates enemy boats and assigns them a letter and a number.
// function createEnemyTargets(totalTargets, enemyBoats){
//   let shipCount = 0;
//   let newShip;
//   let xCoord;
//   let yCoord;
//   while(shipCount < totalTargets) { 
//       xCoord = boardLetters[Math.floor(Math.random() * (boardSize) + 1)]
//       // xCoord = boardLetters[xCoord];
//       yCoord = Math.floor(Math.random() * (boardSize) + 1)
//       newShip = (xCoord + yCoord); 
//       if(enemyBoats.indexOf(newShip) === -1){
//         enemyBoats.push(newShip);
//         shipCount++
//       }
//     }  
// }




// console.log(createEnemyTargets(numberOfFoes, enemyBoats));


// const results = [];
// let xCoord;

// let i = 0;
// while( i < 10) {
//   xCoord = Math.floor(Math.random() * (10) + 1)
//     if(results.indexOf(xCoord) === -1) {
//   results.push(xCoord);
//   i++
//     }
  
// }


// console.log(results)

// function createEnemyTargets(totalTargets){
//   console.log(totalTargets)
//   let shipCount = 0;
//   let newShip;
//   let xCoord;
//   while(shipCount < totalTargets) { 
//       xCoord = Math.floor(Math.random() * (boardSize) + 1)
//       xCoord === 1 ? xCoord = 'A':xCoord === 2 ? xCoord = 'B':xCoord === 3 ? xCoord = 'C':xCoord === 4 ? xCoord = 'D':xCoord === 5 ? xCoord = 'E':xCoord === 6 ? xCoord = 'F':xCoord === 7 ? xCoord = 'G':xCoord === 8 ? xCoord = 'H':xCoord === 9 ? xCoord = 'I':xCoord = 'J'
//       let yCoord = Math.floor(Math.random() * (3) + 1)
//       newShip = (xCoord + yCoord); 
//       if(enemyBoats.indexOf(newShip) === -1){
//         enemyBoats.push(newShip);
//         shipCount++
//       }
//     }  
// }