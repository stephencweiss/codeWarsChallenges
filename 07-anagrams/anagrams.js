function anagramsTwo(word,words){
    word = word.split('').sort().join(''); // this takes a string, puts it into an array, sorts the array, then puts it back into a string
    return words.filter(function(el) {return word === el.split('').sort().join('')})
    // the filter looks at each element in the array words
    // then it runs a call back function - in this case, the function is for each element and determines if the word === to the same alteration for the element
    // if it is, it returns the element into an array
}

function anagrams(word,arrayOfWords){
    //loop over the array of words
    debugger;
    let listOfAnagrams = [];
    for (let i = 0; i < arrayOfWords.length; i++){
        if (word.length === arrayOfWords[i].length){
            let comparisonWord = word.split('');
            let elementAsArray = arrayOfWords[i].split('');
            // loop over the elements in the specific word to see if they are in the comparisonWord
            for (let j = 0; j < elementAsArray.length; j++){
                // if the index >-1, then remove that from the comparison word
                if (comparisonWord.indexOf(elementAsArray[j]) > -1){
                    comparisonWord.splice(comparisonWord.indexOf(elementAsArray[j]),1)
                } else {break;}
            }
            if (comparisonWord.length === 0){
                // when we're done with this element, see if the comparison word is an empty array
                // if it is, put the element (arrayOfWords[i]) into listOfAnagrams;
                listOfAnagrams.push(arrayOfWords[i]);
            }
        }
        // console.log(listOfAnagrams);
    }
    return listOfAnagrams;
}




console.log(anagramsTwo('abba', ['aabb', 'abcd', 'bbaa', 'dada']));



// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// Test.describe("anagrams",function() {
//     Test.it("Tests with anagrams present",function() {    
//         testing(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
//         testing(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
//     })
//     Test.it("Test where no anagrams are present",function(){
//         testing(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
//     })
// })

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) //=> []