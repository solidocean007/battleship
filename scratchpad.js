const boardSize = 3;
const numberOfFoes = 2;
const boardLetters = ['A','B','C','D','E','F','G','H','I','J'];
const enemyBoats = [];
const boardValues = ['1','2','3','4','5','6','7','8','9','10'];

// console.log(testShipOne)

function buildArrayOfPlots(spot, length, direction){
  let plots = [];
  let xLetter = spot.slice(0,1);
  let yNumber = Number(spot.slice(1));
  console.log(xLetter + ' is xLetter')
  console.log(yNumber + ' is yNumber')
  if(direction === 'horizontal'){
    for(let i = 0; i <= length; i++){
      plots.push(xLetter + Number(yNumber + i))
    }
    return plots;
  } else {
    let letterPlace = boardLetters.indexOf(xLetter);
  for(let i = 0; i <= length; i++){
    plots.push(boardLetters[letterPlace + i] + yNumber)
  }
  return plots;
  }
}

// console.log(buildArrayOfPlots('A3', 4, 'vertical'))

//create an array of objects with ids and compare it to another

const array5 = [
  {id: 'A1'},
  {id: 'A2'},
  {id: 'A3'},
  {id: 'A4'},
  {id: 'A5'},
  {id: 'A6'},
]

const array6 = [['A4', 'A3'],['B5', 'B6'],['C7', 'C8']]


console.log(array6.length)

