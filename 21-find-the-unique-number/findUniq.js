function findUniq(arr) {
  // do magic
  // I: An array of numbers, where one number is unique
  // O: The one and only unique numbers:
  // C: O(2n) -- worst case is that the unique value is the last value always
  // E: Unhandled: more than one unique value; no unique value;
  
  // unique values
  const uniqueVals = {};
  // duplicate values
  const duplicateVals = {};
  debugger
  // for each elemement in the array
  for (let i = 0; i < arr.length; i++) {
    // ask if it's present in the duplicate values
    let currentValue = arr[i];
    if (duplicateVals.hasOwnProperty(currentValue)) {
      // if yes - move to next value
      continue;
    }
    if (uniqueVals.hasOwnProperty(currentValue)) {
      // ask if it's present in the unique values
      // if yes add to duplicate values, and
      duplicateVals[currentValue] = true;
      // delete from unique values
      delete uniqueVals[currentValue];
    } else {
      // if no add to unique values
      uniqueVals[currentValue] = true;
    }
  }
  // return the *only* value that's in the unique values
  if (Object.keys(uniqueVals).length === 1) {
    return Number(Object.keys(uniqueVals)[0])
  }
  return null;
}


//Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

console.log(findUniq([  1, 1, 1, 2, 1, 1 ]));

// SHORTER solution

const findUniqShort = (arr) => {
  return Number(arr.filter( (el) => { return arr.indexOf(el) == arr.lastIndexOf(el) }));
}