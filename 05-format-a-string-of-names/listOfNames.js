function list(names){
    //your code here
    debugger;
    namesArray = [];
    names.forEach(element => {
        namesArray.push(element.name);
    });
    let returnStr = '';
    if (namesArray.length > 0){
        for (let i = 0; i < namesArray.length; i++){
            // for the last element, concatenate the name to the return string
            let name = namesArray[i];
            if (name === namesArray[namesArray.length-1]){returnStr = returnStr.concat(`${name}`);}
            // for the second to last element, concatenate the name to the return string followed by an &
            else if (name === namesArray[namesArray.length-2]){returnStr = returnStr.concat(`${name} & `);}
            // for each element in the array, concatenate the name to the return string followed by a ,
            else {returnStr = returnStr.concat(`${name}, `);}
        }
        return returnStr;
        // if fewer than two elements, just return the values
    } else {
        // if the namesArray is >0 elements; return just the element
        return returnStr;
    }
  }


// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
// "Must work with two names")
// Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
// Test.assertEquals(list([]), '', "Must work with no names")

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);
list([ {name: 'Bart'}, {name: 'Lisa'} ])
