function solution(input, markers) {
  
  //i:
  //o:
  //c:
  //e: if string is null - return null; no markers

  if (input === null) {return null}
  // split the string
  // define a finalString
  // for each element in the stringArray <-- this is linear in that it's a sum of lines
    // is there a positive index of one of our markers? (indexOf === -1) <-- this is linear in that it's a sum of characters in a line
      // if yes - truncate the remainder of the string after that marker 
        // e.g., "Abc # comment" --> becomes "Abc" if "#" is in the marker array
    // while there is trailing white space <-- constant
      // if yes, truncate the last space
  // join the array back together on a '\n' character
  // return the finalString
  
};

// time complexity is a function of 
  // lines (l) and characters of each line (c)
  // 