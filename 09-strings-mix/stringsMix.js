//master function that runs through several helper functions to find the mix and match of the most common characters and the source for that character
function mix(){
    debugger;
    let args = arguments; // array of arguments passed into the mix function; [str1, str2]
    let argNickNames = nickNamingArguments(args);
    let argsStringObjects = nameStringsObject(args);
    let resultObject = compareObjectsByKey(argsStringObjects);
    let printableResult = printComparedObjects(resultObject)
    return printableResult;
}


//create nicknames for the arguments so that we can know which argument is the source of a particular letter.
function nickNamingArguments(){
    let args = arguments[0];
    argNickNames = {};
    // effectively, i want to cast the args array as an object where the value is an incrementing number
    for (let i = 0; i < args.length; i++){
        currentKey = args[i]
        argNickNames[currentKey] = i+1;        
    }
    return argNickNames;
}


// creates an object for each argument using the helper function turnStringIntoObject
function nameStringsObject(){
    let args = arguments[0];
    let namesNeeded = args.length;
    let stringHoldingObject = {};
    for (let i = 0; i < namesNeeded; i++){
        stringHoldingObject[args[i]] = turnStringIntoObject(args[i]);
    }
    return stringHoldingObject;
}


// function to convert the string into an object with a key:value pair of letter:count, uses helper function removeValuesOfOne
function turnStringIntoObject(inputString){
    inputString = inputString.replace(/[^a-z]/g,'');
    let stringsObject = {};
    for (i = 0 ; i < inputString.length; i++){
        if (stringsObject.hasOwnProperty(inputString[i])){
            stringsObject[inputString[i]]++;
        } else {stringsObject[inputString[i]] = 1}
    }
    removeValuesOfOne(stringsObject);
    return stringsObject;
};


// remove character count values of 1;
function removeValuesOfOne(stringsObject){
    let length = Object.keys(stringsObject).length;
    for (let i = 0; i < length; i++){
        let key = Object.keys(stringsObject)[i];
        if (stringsObject[key] === 1){
            delete stringsObject[key];
            i--, length--;
        }
    }
    return stringsObject
};


// determines which argument provided the most occurences of a given character;
function compareObjectsByKey(objectOfObjects){
    let comparisonObjects = Object.keys(objectOfObjects);
    let numberOfComparisonObjects = comparisonObjects.length;
    let resultObject = {}; //e.g., {'a':{'count': 4, 'source':'object1'}, 'b':{'count':2,'source':'object2'}, 'c':{'count':2,'source':'object1object2'}}
    
    for (let i = 0; i < numberOfComparisonObjects; i++){
        let source = comparisonObjects[i]
        let sourceKeys = Object.keys(objectOfObjects[source])
        
        for (let j = 0; j < sourceKeys.length; j++){
            // let resultKeys = Object.keys(resultObject); // array
            let currentKey = sourceKeys[j];

            if (resultObject.hasOwnProperty(currentKey)){
                // does the key exist in the results object?
                if(resultObject[currentKey]["count"] < objectOfObjects[source][currentKey]){
                    // does the value exceed existing value?
                    // delete the existing value of the source
                    // add the new value to the source
                    resultObject[currentKey]["count"] = objectOfObjects[source][currentKey];
                    resultObject[currentKey].source = source;
                } else if (resultObject[currentKey]["count"] === objectOfObjects[source][currentKey]){
                    // does the value match existing value
                    // add a new value to the source (concat)
                    resultObject[currentKey].source = resultObject[currentKey].source.concat(",",source)
                }
            } else {
                // add the source, key, value to the results object
                resultObject[currentKey] = {'count':objectOfObjects[source][currentKey], 'source': source};
            }
        }
    }
    return resultObject;
}


// takes as the object with the winners and consolidates that a single string to print
function printComparedObjects(resultObject){
    //accessing the args from the original inputs will provide the keys for understanding how to 
    let arrayToPrint = [];
    let resultObjKeys = Object.keys(resultObject);
    let resultObjLen = resultObjKeys.length;
    
    for (let i = 0; i < resultObjLen; i++){
        // need to iterate through each element of the resultObject
        // look for two things: the source and the actual max. occurences of a character (written as a single continuous string)
        let currentKey = resultObjKeys[i];
        let currentSource = resultObject[currentKey].source
        
        // first we need the source
        let printSource = '';
        let comparisonArgs = Object.keys(argNickNames);
        let argNumber = comparisonArgs.length;
        let counter = 0;
        for (let j = 0; j < argNumber; j++){
            comparisonArg = comparisonArgs[j];
            if (currentSource.indexOf(comparisonArg) > -1){
                //if the currenSource has the contents of multiple keys from teh argsNickname Object, then '=', else just the first match
                counter++;
                if (counter > 1){
                    printSource = '=';
                    // break;
                }
                //if the source includes a 'comma', it means that there's a match in terms of occurence, return =,
            } else {
                printSource = String(argNickNames[currentSource]);
            }

        }
    
        // next we need the number of occurences
        let printCount = currentKey.repeat(resultObject[currentKey].count);
        
        // join two parts of string to create the entry into the array
        stringToPrint = printSource.concat(':',printCount);
        arrayToPrint.push(stringToPrint);
    }
    arrayToPrint.sort(function(a,b){return b.length-a.length})
    
    // collapse the array into a single string
    return arrayToPrint.join('/')
}

// Note: This doesn't match the criteria because my answer is out of order - event when sorted. So, even though results matched tests, it won't pass because the tests compare strings, not string contents.