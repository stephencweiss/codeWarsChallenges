function whoIsNext(names, r){
  //your code here
  /*
    I: An array of names and a target value
    O: The element of the array who appears after r iterations
    C: None
    E: Limited by assumptions that names.length > 1 && < 1000000000
    */

  // We will count up from 0 to r
  for (let count = 1; count < r; count++) {
    // While we are counting up
    // Dequeue the first element
    let currentDrinker = names.shift(); // currentDrinker = names[0]; names = names.slice(1)
    // add the first element to the end of the array x2
    names = doubleEntry(names, currentDrinker);
  }
  // return the first element
  return names[0]
}

let doubleEntry = (array, element) => {
  array.push(element, element);
  return array;
}


//
var names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]


function whoIsNext(names, r) {
  var len = names.length;
  var power = 0;

  if (r < len) {return names[r-1]}

  while (len * Math.pow(2 , power) < r) {
    power += 1;
  }

  var lastDbl = power - 1;
  var lenLastDbl = len *  Math.pow(2 , lastDbl)
  var distFromDbl = r - len * Math.pow(2 , lastDbl)
  var index = findIndex(distFromDbl, lastDbl)
  return names[index-1];
}

function findIndex(distFromDbl, lastDbl) {
  if (distFromDbl % Math.pow(2 , lastDbl) === 0) {
    return distFromDbl / Math.pow(2 , lastDbl)
  } else {
    return Math.floor(distFromDbl / Math.pow(2 , lastDbl))+1
    console.log('here')
  }
}

console.log(whoIsNext(names, 10)) // Penny
// console.log(whoIsNext(names, 3)) // penny
// console.log(whoIsNext(names, 13))
// console.log(whoIsNext(names, 19)) // Howard

