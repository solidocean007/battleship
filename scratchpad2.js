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