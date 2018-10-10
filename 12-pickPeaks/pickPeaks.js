function pickPeaks(arr){
  /*
  O: Object with {pos:[], peaks:[]}
  I: an array
  C: Linear,
  E: No local maxima, due to a plateau, only one value, or continuously ascending / descending
  A: Valid integer array
  */
  //  return {pos:[],peaks:[]}
  // create a holding object

  let finalLocalMaxima = {'pos' : [], 'peaks' : []};
  let currentLocalMaximum = {'pos' : undefined, 'peaks' : undefined };

  for (let index = 1; index < arr.length; index++) {
    let currentVal = arr[index], prevVal = arr[index-1];
    // for each element in the array, after the first
    // Compare the value to the current local maximum
    if (currentVal < currentLocalMaximum.peaks) {
      // if it's less,
        // move the current local maximum to a final holder of local maxima
        finalLocalMaxima.pos.push(currentLocalMaximum.pos);
        finalLocalMaxima.peaks.push(currentLocalMaximum.peaks);
        currentLocalMaximum.pos = undefined;
        currentLocalMaximum.peaks = undefined;
    }
    // if the current value is greater than the current local maximum || it's greater than the previous value
    if ( (currentVal > currentLocalMaximum.peaks && currentLocalMaximum.peaks !== undefined) || currentVal > prevVal) {
        // move the current value to the current local maximum
        currentLocalMaximum.pos = index;
        currentLocalMaximum.peaks = currentVal;
    }
  }
  return finalLocalMaxima;
}

console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]))