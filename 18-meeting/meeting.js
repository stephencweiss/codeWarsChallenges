function meeting(s) {
  // your code
  // I: a string of meetings - each meeting is between two names which are separated by a colon. Meetings are separated by semi colons.
  // O: A string of meetings - each meeting is between two names which are comma separated. Meetings are separated by Parentheses. All names are in capital letters
  
  // separate into an array of meetings - separate the string at the ;
  let listOfMeetings = s.toUpperCase().split(';')
  console.log(listOfMeetings);
  // create a new meeting record that is (LAST,FIRST) (from First:Last )
  let modifiedList = listOfMeetings.map( (value) => {
    return value.split(':').reverse().join(', ');
  })
  // for each record in the array
      // split the record on the :
      // swap the values
      // make the values upper case
      // join on a comma
  // organize the meetings alphabetically
  return `(${modifiedList.sort().join(`)(`)})`
  // sort by value
    // items.sort(function (a, b) {
      // return a.value - b.value;
    // });
  // join the array and enclose each element in parentheses
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))