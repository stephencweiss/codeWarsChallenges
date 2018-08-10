function race2(v1,v2,g){
    if (v1>=v2){return null;}
    let time = g / (v2-v1);
    let seconds = time * 3600;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);
    return [hours,minutes,seconds];
}


function race(v1, v2, g) {
    // your code
    debugger;
    if (!(v1 >= v2)){
        let time = -(v2 * g / (v1-v2) )/v2;
        return timeToArrayConversion(time);
    } else {return null;}
}

let timeToArrayConversion = (timeElapsed) => { //1.112412
    debugger;
    let outputTime = [];
    let hours = Math.floor(timeElapsed);
    let fractionalHour = timeElapsed-Math.floor(timeElapsed); //.112412
    let minutes = Math.floor(fractionalHour*60);//6
    let fractionalMinutes = timeElapsed-hours-(minutes/60)//time - hours - minutes   fractionalHour*60-Math.floor(fractionalHour*60); //.72
    // let fractionalSeconds = fractionalMinutes*60-Math.floor(fractionalMinutes*60);
    let seconds = Math.floor(fractionalMinutes*60*60);
    outputTime.push(hours, minutes,seconds);
    return outputTime;
}

timeToArrayConversion(1.105);

// 1 hour 6 minutes 20seconds


// race(720, 850, 70)