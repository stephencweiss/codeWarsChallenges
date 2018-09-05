function decompose(n) {
    // given a number, n, we have a target number for our sum
    // we also have an Original starting point, which will be n-1

    // sequenceFinder (target, startingPoint, sequence)
    // we will have the sequence of numbers, an array, that we add each value into as we get to it, this is reset with each new starting point
    
    // we will map the sequence to a squares array
    // we will reduce the squares array into a sum
    // we will find the difference between our target and our sum, which is our balance remaining
    // while the balance is > 0, the sequence number is greater than 0, continue
        // we will find the next sequence number by finding the sqrt of the target and seeing if that is equal to the math.floor(sqrt(target))
        // if it is, currentSequence = the sqrt,
        // add the currentSequence to the sequence of numbers
        // invoke sequenceFinder with current values sequenceFinder(target, startingPoint = currentSequence, sequence)
        // 
        
    // is the balance 0? 
        // is the array strictly increasing? 
        // if yes, return
    // if balance < 0
        // -> if you get to this, then you call the above sequenceFinder, but reduce the starting point by 1 and have a blank sequence
        // originalStartingPoint -= 1
        // sequenceFinder(target, originalStartingPoint, [])
    

}