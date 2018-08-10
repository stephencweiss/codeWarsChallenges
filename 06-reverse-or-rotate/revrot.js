function revrot(str, sz) {
    // your code
    debugger;
    if (sz<=0 || str === '' || sz > str.length){return '';}// is the (sz<=0 || str === '' || sz>str.length) => return ''
    else {
        // split str into chunks (push split string into an array)
        let chunkArray = splitStr(str,sz);
        for (let i = 0; i < chunkArray.length; i++){
            // let element = chunkArray[i]
            // if case 1 chunksum of the cubes of its digits % 2===0, reverse
            if(digitsCubedDivisibleByTwo(chunkArray[i])){
                chunkArray[i] = chunkArray[i].split('').reverse().join('');
                console.log(chunkArray[i]);
                // console.log(element);
                //reverse - the split, reverse, join sequence uses three built-ins to
                // a) split a string into an array
                // b) reverse an array
                // c) join all of the elements in an array into a string
            } else {
                chunkArray[i] = chunkArray[i].substring(1).concat(chunkArray[i][0])
                console.log(chunkArray[i]);
                // console.log(element);
                //else shift then push <- would have worked if we were dealing with arrays, but the elements are strings
                //substring then concat is simple and meets our narrow use case
            }
        }
        let output = chunkArray.join('');
        console.log(output);
        return output;
    }
}

function splitStr(str,sz){
    // helper function to split the string into chunks
    debugger;
    let arrayOfChunks = [];
    let startIdx = 0;
    let step = sz;
    let endIdx = sz;
    let cap = str.length;
    let loops = Math.floor(cap / step);
    for (let i = 0; i < loops; i++){
        arrayOfChunks.push(str.substring(startIdx,endIdx));
        startIdx += step;
        endIdx += step;
    }
    return arrayOfChunks
}
function digitsCubedDivisibleByTwo(element){
    // helper function to evaluate if the digits cubed are divisible by 2
    // debugger;
    // number = Number(element);
    let total = 0;
    for (let i=0; i<element.length; i++){
        total += Math.pow(Number(element[i]),3);
    }
    if (total % 2 === 0){return true;}
    else {return false;}
}

// digitsCubed("123456")

revrot("733049910872815764", 3) //--> "330479108928157"

//733 049 910 872 815 764