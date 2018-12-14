function listSquared(m, n) {
  /**
   * I: Two numbers, m and n, that act as a range over which we will look
   * O: An array of tuples where the 0th index of the tuple is the number that matches our conditions 
   * and the 1st index is the sum of the number's divisors squared
   * C: O(n) -> the complexity of the problem grows with the range established by the inputs
   * E: How the range is devised - e.g., (10, 9) vs (9, 10) - expecting least to greatest; inclusive of m and n? assumed yes.
   */
  debugger;
  // Establish global variables, incl results array
  const resultsArr = []
  // Establish a for loop that ranges from m to n by one
  for (let i = m; i <= n; i += 1) {
    // keeping track of our current element
    // find all of the element's divisors, square them, then sum the elements
    // evaluate the summed squared divisors for a perfect square
    let sumSqDivisors = findUniqDivisors(i).map((el) => {return el*el}).reduce((accumulator, currentVal) => {return accumulator + currentVal}, 0)
    if ( perfectSqEval (sumSqDivisors)) {
      // if a perfect square, add as a tuple [currentEl, summedSquaredDivisors] to results
      resultsArr.push([i, sumSqDivisors])
    }
  }
  // return the results array for the tuple
  return resultsArr;

}

// find all divisors of a number (x)
const findUniqDivisors = (x) => {
  const maxRange = Math.floor(Math.sqrt(x));
  const divisors = {}
  for (let i = 1; i <= maxRange; i += 1) {
    let lowFactor = i
    let highFactor = x / lowFactor
    if ( highFactor % 1 === 0) {
      divisors[lowFactor] = true;
      divisors[highFactor] = true
    }
  }
  const sortFn = (a, b) => {
    if (a < b) { return -1 }
    else return 1;
  }
  const divisorsArr = Object.keys(divisors).sort(sortFn)
  return divisorsArr;
}


const perfectSqEval = (x) => {
  const sqRoot = Math.sqrt(x)
  if (sqRoot === Math.floor(sqRoot)) {
    return true
  } 
  return false
}



console.log(listSquared(1, 250)); // [[1, 1], [42, 2500], [246, 84100]]