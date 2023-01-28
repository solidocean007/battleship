const boardSize = 3;
const numberOfFoes = 2;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
const enemyBoats = [];
const boardValues = ['1','2','3','4','5','6','7','8','9','10'];



class shipBuilder {
  constructor(shipLength) {
    this.shipLength = shipLength
    // this.axisSpots = axisSpots
  }
}

const testShipOne = new shipBuilder(4)

// console.log(testShipOne)

const array1 = [ 'A1', 'B2', 'C3', 'D4', 'E5', 'F6'];
const array2 = [ 'A1', 'J5'];

function findNewRoom(plotsOccupied , newRandomSpots){
 if(plotsOccupied.some((id) => newRandomSpots.includes(id))){
  return true
 } else { return false}

}

console.log(findNewRoom(array1, array2))

const array3 = [{id: 'A1', occupied: false}, {id: 'B2', occupied: false}, {id: 'C3', occupied: false}, {id: 'D4', occupied: false}, {id: 'E5', occupied: false}, {id: 'F6', occupied: false}];
const array4 = [ 'A1', 'J5'];

function findNewRoom(plotsOccupied, newRandomSpots) {
  plotsOccupied.forEach(room => {
    if (newRandomSpots.includes(room.id)){
      room.occupied = true;
    }
  });
  return plotsOccupied;
}
console.log(findNewRoom(array3, array4))


// let array1 = ['apple', 'banana', 'orange'];
// let array2 = ['apple', 'grape', 'kiwi'];

// if (array1.some(x => array2.includes(x))) {
//   console.log('There are common elements in the arrays');
// } else {
//   console.log('There are no common elements in the arrays');
// }
