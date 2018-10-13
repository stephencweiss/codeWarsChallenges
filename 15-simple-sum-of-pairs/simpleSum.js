//source: https://www.codewars.com/kata/simple-sum-of-pairs/train/javascript

function solve(n){
  /*
    I: a number that will be a target of our calculations
    O: The sum of the digits of two integers (that sum to the target)
    C: A,B >= 0, O(n) - Sublinear
    E: Negative numbers
    */

  let memo = {}

  let a = 0, b = n, maxDigitSum = digitSum(a,b)
  while (a <= b ) {
    let stringVersion = numA.toString().concat(numB.toString());
    let arrOfDigits = stringVersion.split('')
    let sortedArr = arrOfDigits.sort()
    let key = sortedArr.join();
    if (!memo[key]){
      let currentDigitSum = digitSum(sortedArr, memo)
      if (currentDigitSum > maxDigitSum) {
        maxDigitSum = currentDigitSum;
      }
    }
    a++; b--;
  }
  return maxDigitSum

}

let memo = {}

function digitSum(arr, memo) {
  let reducer = (acc, val) => {return Number(acc) + Number(val)};
  memo[key] = Number(sortedArr.reduce(reducer));
  return memo[key]
}

solve(10)