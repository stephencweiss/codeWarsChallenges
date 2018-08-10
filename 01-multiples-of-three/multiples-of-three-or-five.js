function solution(numbers){
  debugger;
  let numbersArray = [];
  for (let i = 0; i < numbers; i++){
      numbersArray.push(i);
  }
  let result = 0;
  let multiplesArray = [];
  for (let i = 0 ; i < numbersArray.length; i++){
    if (numbersArray[i] % 3 === 0 || numbersArray[i] % 5 === 0){
      result += numbersArray[i];
      multiplesArray.push(numbersArray[i]);
    }
  }
  return result;
}

multiplesOfThreeAndFive(10)
