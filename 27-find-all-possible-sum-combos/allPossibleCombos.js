const evalForSum = (number, arr) => {
  let num = 0
  arr = arr || []
  while (number - num >= 0) {
    arr.push(number)
    num += 1;
    let curNum = number - num;
    evalForSum(curNum, arr)
  }
  return arr;
}

const combos = number => {
  const results = [];
  // let num = 0;
  // while (number - num >= 0)  {
  //   let curNum = number - num
  //   let newCombo = evalFormSum(curNum, [num]);
  //   newCombo.sort();
  //   // if the newCombo already exists in results, don't add it
  //   results.push(newCombo)
  //   num += 1;
  // }
  evalForSum(number, results);
  return results;
}

console.log(combos(3))