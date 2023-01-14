// 1st example
const my2ndArray = ['apple', 'banana', 'orange'];
const my2ndString = 'banana';

if (my2ndArray.indexOf(my2ndString) !== -1) {
  console.log(my2ndString + ' is in the array.'); // banana is in the array
} else {
  console.log(my2ndString + ' is not in the array.');
}



// 2nd example
const myArray = ['apple', 'banana', 'orange'];
const myString = 'banana';

if (myString in myArray) {
  console.log(myString + ' is in the array.');
} else {
  console.log(myString + ' is not in the array.'); 
}  // banana is not in the array.


// 3rd example
let my3rdArray = ['one', 'two', 'three'];
let my3rdString = 'three';

if (my3rdString in my3rdArray) {
  console.log(my3rdString + ' is in the array.');
} else {
  console.log(my3rdString + ' is not in the array.');
}



function createEnemyTargets(totalTargets){
  console.log(totalTargets)
  let shipCount = 0;
  let newShip = '';
  while(shipCount < totalTargets && (enemyBoats.indexOf(newShip) == -1)) { // while shipcount is less than needed and newship isnt already in enemyboat array....do the following code...
    let xCoord = Math.floor(Math.random() * (boardSize) + 1)
      xCoord === 1 ? xCoord = 'A':xCoord === 2 ? xCoord = 'B':xCoord === 3 ? xCoord = 'C':xCoord === 4 ? xCoord = 'D':xCoord === 5 ? xCoord = 'E':xCoord === 6 ? xCoord = 'F':xCoord === 7 ? xCoord = 'G':xCoord === 8 ? xCoord = 'H':xCoord === 9 ? xCoord = 'I':xCoord = 'J'
      let yCoord = Math.floor(Math.random() * (3) + 1)
      newShip =  (xCoord + yCoord); 
      console.log(newShip);
      enemyBoats.push(newShip); 
      shipCount++ 
    }
    return String(enemyBoats);  
}