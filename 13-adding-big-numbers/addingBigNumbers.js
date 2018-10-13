/*
  I: Two Strings
  O: One String; the sum of the two inputs
  C: None specified
  E: negative numbers (excluded for now)
  */

function add(a, b) {

  let results;
  let arrA = [...a], arrB = [...b]
  let aInt, aFract, bInt, bFract;

  // Get values for left of a decimal
  aInt = arrA.indexOf('.') > -1 ? arrA.slice(0, arrA.indexOf('.')) : arrA.slice();
  bInt = arrB.indexOf('.') > -1 ? arrB.slice(0, arrB.indexOf('.')) : arrB.slice();
  let longerInt = aInt.length < bInt.length ? bInt : aInt;
  let shorterInt = aInt === longerInt ? bInt : aInt;
  let intOffset = offset(longerInt, shorterInt);
  if (shorterInt[0] !== undefined) {
    shorterInt = zeroPad(shorterInt, intOffset, false);
  }

  // Get values for right of a decimal
  aFract = arrA.indexOf('.') > -1 ? arrA.slice(arrA.indexOf('.')+1) : 0 ;
  bFract = arrA.indexOf('.') > -1 ? arrB.slice(arrB.indexOf('.')+1) : 0 ;
  let longerFract = aFract.length < bFract.length ? bFract : aFract;
  let shorterFract = aFract === longerFract ? bFract : aFract;
  let fractOffset = offset(longerFract, shorterFract);
  if (shorterFract[0] !== undefined){
    shorterFract = zeroPad(shorterFract, fractOffset);

  }


  // Find the sum of anything to the RIGHT of 0;
  let fractSumArr = addTwoInt(longerFract, shorterFract)

  // If the final number is greater length, it's because there was a final carry
  let carry = 0;
  if (fractSumArr[0] > 9 && longerInt[0]!== undefined) {
    carry = 1
    fractSumArr[0] = fractSumArr[0]-10;
  }
  // now we can proceed to add the two numbers together to the left of the decimal
  let intSumArr = addTwoInt(longerInt, shorterInt, carry);

  // Case 1: Ints Only
  if (fractSumArr[0] === undefined) {
    results = intSumArr;

  // Case 2: Fractions Only
  } else if (intSumArr[0] === undefined){
    if (fractSumArr[0] > 9){
      fractSumArr[0] = fractSumArr[0] - 10;
      results = [1,'.'].concat(fractSumArr);

    } else {
      results = [0,'.'].concat(fractSumArr);
    }

  // Case 3: Ints & Fractions
  } else {
    results = intSumArr.concat(['.']).concat(fractSumArr);

  }

  return results.join('').toString()

}

function addTwoInt(longerInt, shorterInt, carry) {

  let holdingArray = []
  carry = carry || 0;

  if (shorterInt[0] === 0 && shorterInt.length === 1) {
    holdingArray = longerInt;
    return holdingArray
  }


  for (let i = 1; i <= longerInt.length; i++) {
    let curValA = Number(longerInt[longerInt.length - i]);
    let curValB = Number(shorterInt[shorterInt.length - i]);

    if (shorterInt.length - i >= 0) {
      if (carry !== 0) {
        curValA = curValA + carry;
        carry = 0;
      }

      let curSum = curValA + curValB;
      if((longerInt.length - i === 0) && curSum > 9) {
        holdingArray.unshift(curValA + curValB);
      } else if (curSum > 9) {
        holdingArray.unshift(curSum - 10)
        carry = 1;
      } else {
        holdingArray.unshift(curSum)
      }
    } else {
      if (carry !== 0)
        curValA ++;
        carry = 0;
        if (curValA > 9){
          curValA = curValA - 10
          carry ++
        }
      holdingArray.unshift(curValA)
    }
  }
  return holdingArray
}


function offset (longerArray, shorterArray) {
  let diff = longerArray.length - shorterArray.length;
  return diff
}


function zeroPad (inArray, number, right = true) {
  let zeroArray = Array(number);
  for (let i = 0; i < zeroArray.length; i++) {
    zeroArray[i] = 0;
  }
  if (right) {
    inArray = inArray.concat(zeroArray)
  } else {
    inArray = zeroArray.concat(inArray)
  }
  return inArray
}

console.log(add('6382', '9093849')); // 9100231
// console.log(add('63829983432984289347293874', '90938498237058927340892374089')) //

// console.log(add('.32', '.9807')) // 1.307

// console.log(add('.0001','1.000000000000000000000000000000005')) // 0.000100000000000000000000000000005
