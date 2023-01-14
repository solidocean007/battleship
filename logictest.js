const results = [];
let xCoord;

let i = 0;
while( i < 10) {
  xCoord = Math.floor(Math.random() * (10) + 1)
    if(results.indexOf(xCoord) === -1) {
  results.push(xCoord);
  i++
    }
  
}


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