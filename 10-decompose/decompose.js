function decompose(n) {
    // given a number, n, we have a target number for our sum
    let targetSum = n**2
    // we also have an Original starting point, which will be n-1
    let originalStartingPoint = n-1

    let sequenceFinder = (target = targetSum, startingPoint = originalStartingPoint, sequence = new Array) => {
        // sequenceFinder (target, startingPoint, sequence)
        // we will have the sequence of numbers, an array, that we add each value into as we get to it, this is reset with each new starting point
        // we will map the sequence to a squares array
        let sequenceSquared = sequence.map(x => x**2);
        // we will reduce the squares array into a sum
        let sequenceSum = sequenceSquared.reduce( (accumulator, currentValue) => accumulator + currentValue );
        // we will find the difference between our target and our sum, which is our balance remaining
        let remainingBalance = target - sequenceSum
        // while the balance is > 0, the sequence number is greater than 0, continue
        while (remainingBalance > 0){
            let newSequenceNumber = Math.sqrt(remainingBalance)
            if (newSequenceNumber === Math.floor(newSequenceNumber)){
                sequence.push(newSequenceNumber);
                sequenceFinder(target, startingPoint, sequence)
            // we will find the next sequence number by finding the sqrt of the target and seeing if that is equal to the math.floor(sqrt(target))
            // if it is, currentSequence = the sqrt,
            // add the currentSequence to the sequence of numbers
            // invoke sequenceFinder with current values sequenceFinder(target, startingPoint = currentSequence, sequence)
            }
        }
        if (remainingBalance === 0){
            
            
            if (/*sequence is increasing*/ true ){
                return sequence;
            }
        }
        if (originalStartingPoint === 0){
            return null;
        }

        // If we get to this point, either the remaining balance is < 0 || the sequence is not strictly increasing, so try again with a lower starting point
        // if balance < 0
        // -> if you get to this, then you call the above sequenceFinder, but reduce the starting point by 1 and have a blank sequence
        // originalStartingPoint -= 1
        // sequenceFinder(target, originalStartingPoint, [])
        originalStartingPoint -= 1;
        sequenceFinder (target, originalStartingPoint, []);
    }

}


// sort and confirm it's increasing

function increasingSequenceCheck(arr){
    debugger;
    
    arr.sort(); // start by sorting in increasing order
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            return false;
        }
    }
    return true;
}

increasingSequenceCheck([1,8,4,5,3]);

increasingSequenceCheck([1,1,8,4,5,3]);
