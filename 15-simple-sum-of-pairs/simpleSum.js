//source: https://www.codewars.com/kata/simple-sum-of-pairs/train/javascript

function solve(n){
  /*
    I: a number that will be a target of our calculations
    O: The sum of the digits of two integers (that sum to the target)
    C: A,B >= 0, O(n) - Sublinear
    E: Negative numbers
    */
  // let lower, upper;

  // if (n % 2 === 0){
  //   lower = n/2 - 1;
  //   upper = n/2 + 1;
  // } else {
  //   lower = Math.floor(n/2);
  //   upper = lower + 1;
  // }
  // console.log(lower, upper)

  // return lower.toString().concat(upper.toString())
  //   .split('')
  //   .reduce((acc, val) => {return Number(acc) + Number(val)})






  let memo = {}

  let a = 0, b = n, maxDigitSum = 0;

  while (a <= b ) {
    let stringVersion = a.toString().concat(b.toString());
    let arrOfDigits = stringVersion.split('')
    let sortedArr = arrOfDigits.sort()
    let key = sortedArr.join();
    let currentDigitSum
    if (!memo[key]){
      currentDigitSum = sortedArr.reduce((acc, val) => {return Number(acc) + Number(val)})
      memo[key] = Number(currentDigitSum);
    }
    if (currentDigitSum > maxDigitSum) {
        maxDigitSum = currentDigitSum;
    }
    a++; b--;
  }
  console.log(memo)
  console.log(Object.keys(memo).length)
  return maxDigitSum

}

console.log(solve(7019)); // 35