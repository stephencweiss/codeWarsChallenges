// let str = '172.12.1.25`';
// let str2 = `172.192.1.25`;
// let pattern = /(\d{1,3}\.)+(\d{1,3}$)/
// let testResult1 = pattern.test(str);
// let testResult2 = pattern.test(str2);

// let arrayOfString = str.split(".")

// console.log(testResult1);
// console.log(testResult2);


function isValidIP(str) {
    debugger;
    let pattern = /(\d{1,3}\.)+(\d{1,3}$)/;
    let arrayOfStr = str.split(".");
    //test 1: did the pattern match?
    let test1 = pattern.test(str);
    //test 2: is the length of the arrayOfStr = 4
     let test2 = arrayOfStr.length
    //test 3: are each of the elements < 255;
    let test3 = arrayOfStr.every((element) => Number(element)<255);
    //test 4: no element starts with a leading 0
    let test4 = arrayOfStr.every((element) => String(Number(element)) === element);
    if (test1 === true && test2 === 4 && test3 === true && test4 === true){
        return true;
    }
    return false;
  }

  isValidIP("123.45.67.89");
  isValidIP("1.2.3.4.5");