function iqTest(numbers){
    // convert numbers into an array
    let numbersArr = numbers.split(' ');
    // create an evens array = []
    let evensArr = [];
    // create an odds array = []
    let oddsArr = [];
    // iterate and identify even/odd -- COPY an even/odd into respective arrays
    for (let i = 0; i < numbersArr.length; i++){
      if (numbersArr[i] % 2 === 0){
          evensArr.push(numbersArr[i]);
        } else {
          oddsArr.push(numbersArr[i]);
        }
    }
    if (evensArr.length === 1){
      let position = numbersArr.indexOf(evensArr[0]);
      return position +1;
    } else if (oddsArr.length === 1){
      let position = numbersArr.indexOf(oddsArr[0]);
      return position +1;
    }
    // find evens/odds with length one
    // find the index of that array's element in the original numbers array
    // return index+1
    
    
  }