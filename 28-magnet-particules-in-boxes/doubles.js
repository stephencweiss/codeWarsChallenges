const doubles = (maxK, maxN) => {
  let sum = 0
  for (let k = 1; k <= maxK; k += 1) {
    for (let n = 1; n <= maxN; n += 1) {
      let curDenominator = Math.pow(k*(n+1), 2*k)
      sum += 1 / curDenominator
    }
  }
  return sum;
}


console.log(doubles(1,3));
console.log(doubles(1,10));
console.log(doubles(10,100));

0.5580321939764581
0.5580321939764581

0.6402509645004103
0.6832948559787737