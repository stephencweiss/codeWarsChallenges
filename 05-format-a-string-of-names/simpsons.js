function list(names){
    //your code here
    debugger;
    let returnStr = '';
    let namesArray = [];
    names.forEach((element) => {
        namesArray.push(element.name)
    })
    if (namesArray.length > 0) {
        for(let i = 0; i < namesArray.length; i++){
            let name = namesArray[i]
            if (name === namesArray[namesArray.length - 1]){
            // name === last name in array => add `name`
            returnStr = returnStr.concat(`${name}`);
            } else if (name === namesArray[namesArray.length - 2]){
            // name === second to last name in array = add `name & `
            returnStr = returnStr.concat(`${name} & `);
            } else {
            // name is any other => add `name, ` 
            returnStr = returnStr.concat(`${name}, `);
            }
        }
    }
    return returnStr;
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])