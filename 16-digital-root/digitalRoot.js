function digital_root(n) {
  /*
  I: Number
  O: Sum of the digits where the sum is a single digit
  C: Recursive solution
  E: Negative numbers - not handled
  */
  // Base Case
  if (n < 10) {
    return n
  }
  // Recursive Case
  let nStrArr = n.toString().split('');
  let reducer = (acc, val) => {return Number(acc) + Number (val)};
  let digitSum = nStrArr.reduce(reducer);
  return digital_root(digitSum);
}

console.log(digital_root(16))