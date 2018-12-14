let RomanNumerals = {
  values:{
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
  },

  toRoman: (number) => {
    if (typeof number !== 'number') { return null }
    let romanNumeralHolder = []
    // Split the number into an array
    let numberArr = String(number).split('');
    // For each element, replace the digit with a new object:
      // Create an object that holds 
        // The first number (the digit)
        // A base - 10^(numberArr.length - 1 - index) 
    


    // Does the leading integer number have a remainder of 1 when divided by the leading integer + 1
      // if so, add a leading mitigator multiplied by 10 ^ (the power of the element - 1)
      // add one to the leading integer (multiplied by 10 ^ the power of the current element - so 4 becomes 5, 9 becomes 10, and 90 becomes 100)
      // find the equivalent roman numeral in the values object
      // push the leader into the RomanNumeralHolder
    // find the element in the values
      // while the number is not present in the values 
        // subtract 1 x 10 to the power of the number
        // track the number of times
      // push the element into the romanNumeralHolder
  },

  fromRoman: (string) => {
    // I: A string representing a Roman Numeral
    // O: A number that is the Roman Numeral equivalent
    // C: None specified -- should be O(n) where n = the length of the string; due to the need to process each character of the string
    // E: A non-string input; numbers greater than 9000

    if (typeof string !== 'string') { return null }
    // Have a running total
    let runningTotal = 0;
    // Split the string into an array
    let characterArray = string.split('');
    // Find the roman numeral equivalent value
    for (let index = 0; index < string.length; index++) {
      let currentChar = characterArray[index];
      let nextChar = characterArray[index + 1];
      let currentValue = RomanNumerals.values[currentChar];
      let nextValue = RomanNumerals.values[nextChar];
      // is the value less than the next element?
      if (currentValue < nextValue) {
        // If yes, make it negative
        currentValue = -currentValue
      }
      // add the current element to the running total
      runningTotal += currentValue
    }
    // return the running total
    return runningTotal
  }


}

// console.log(RomanNumerals.fromRoman('XXI'))
// console.log(RomanNumerals.fromRoman('I'))
// console.log(RomanNumerals.fromRoman('III'))
// console.log(RomanNumerals.fromRoman('IV'))
// console.log(RomanNumerals.fromRoman('MMVII'))
// console.log(RomanNumerals.fromRoman('MDCLXIX'))

console.log(5000 % 9000)