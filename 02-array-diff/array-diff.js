function array_diff(arrayA, arrayB){
    debugger;
    // cycle through array b
    for (let i = 0; i < arrayB.length; i++){
        // cycle through array a
        for (let j = 0; j < arrayA.length; j++){
            // if the element of array a[j] === element of array b[i], 
            if (arrayA[j]===arrayB[i]){
                //drop it
                arrayA.splice(j,1);
                j --;
            }
        }
    }
    return arrayA   
    
}


arrayDiff([1,2,2,2,3],[2]) 
// >[1,3]