function sc(time,km){
  /*
  I: A time at which you start waiting for a bus (in hh:mm) and your distance from the bus departure point (km)
  O: The time at which you will get on the bus (in hh:mm)
  C: None
  E: The bus only departs between 06:00 and 20:00
  */
  // Find time from midnight
  debugger;
  let pickUpTime = 0;
  let timeOfArrival = time.split(':');
  let minutesArrivedAfterMidnight = Number(timeOfArrival[0])*60+Number(timeOfArrival[1])
  // Find the time it will take the bus to get to you (traveling at a constant 30 km/h)
  let timeToYou = km/30 * 60/1  // returns time in minutes (km / km/h * m/h = m)
  // Find the departure time that is equivalent to the time you start - the time it took to get to you
  let departureTime = (minutesArrivedAfterMidnight - timeToYou)
  while ( departureTime % 15 !== 0) {
    // If this is not on the quarter hour, find the next quarter hour
    departureTime++
  }
  if ( departureTime >= 6*60 && departureTime <= 20*60) {
    pickUpTime = departureTime+timeToYou
  } else { pickUpTime = 6*60 + timeToYou }
  while (pickUpTime >= 1440) {
    pickUpTime = pickUpTime - 1440
  } 
  let hour = pickUpTime / 60 < 10 ? '0'.concat(String(Math.floor(pickUpTime / 60))) : String(Math.floor(pickUpTime / 60));
  let minutes = pickUpTime % 60 < 10 ? '0'.concat(String(Math.floor(pickUpTime % 60))) : String(Math.floor(pickUpTime % 60));
  return hour.concat(":", minutes)
}

console.log(sc('14:16',248))