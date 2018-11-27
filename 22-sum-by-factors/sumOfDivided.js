function sumOfDivided(lst) {
  //code
  //I: A list of numbers
  //O: An array of arrays where each element (an array) contains two elements
  debugger;
  const primesAndSums = {};
  // For each number in the list
  for (let i = 0; i < lst.length; i++) {
    const curNumber = lst[i];
    // find all primes for the numbers
    const factors = primeFactors(Math.abs(curNumber))
    // for each factor
    for (let j = 0; j < factors.length; j++) {
      // if it already exists
      let curFactor = factors[j];
      if (primesAndSums.hasOwnProperty(curFactor)) {
        // add the curNumber to the value
        primesAndSums[curFactor] += curNumber;
      } else { 
        // add a new key:value pair of the factor and the curNumber
        primesAndSums[curFactor] = curNumber;
      }
    }
  }
  return convertObjToArray(primesAndSums);
}

function primeFactors(n) {
  // I: A number
  // O: An array of prime factors
  // for each integer *greater* than 1 (per the tests) and up to the square root of n
  const primeFactorsList = [];
  for (let i = 1; i <= n; i++) {
    // if it's prime and when divided into n, the remainder is 0
    if (primeTester(i) && n % i === 0 && i > 1) {
      //  add it to an array of primes
      primeFactorsList.push(i);
    }
  }
  return primeFactorsList;
}

function primeTester (factor) {
  if (typeof factor !== 'number' || factor < 1 || factor % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  if (factor === 1) {return true;}

  for (let i = 1; i <= Math.floor(Math.sqrt(factor)); i++) {
    if (factor % i === 0 && i > 1) {
      return false
    }
  }
  return true;
};

function convertObjToArray (objectToConvert) {
  let keys = Object.keys(objectToConvert);
  let newArray = []
  for (let i = 0; i < keys.length; i++) {
    newArray.push([Number(keys[i]), objectToConvert[keys[i]]])
  }
  return newArray;
}

console.log(sumOfDivided([15, 21, 24, 30, -45]));