/*
  Input:
    - 1 number
      - represents the number of minutes before/after midnight
  Output:
    - 1 string
      - in the format "hh:mm"

  Algorithm:
    decimal representation of time = floor of (input / 60) % 24
      accounts for overflow (more than 24 hours)
    hours = integer portion of time
    minutes = decimal portion of time

    positive:
      
*/

function getHour(minutes) {
  let hours = Math.floor((minutes / 60) % 24);
  if (hours >= 0) {
    return hours;
  } else {
    return 24 + hours;
  }
}

function getMinute(minutes) {
  if (minutes >= 0) {
    return minutes % 60;
  } else {
    return (minutes % 60) + 60;
  }
}

function zeroPad(number) {
  let numberString = number.toString();
  if (numberString.length < 2) {
    return '0' + numberString;
  } else {
    return numberString;
  }
}

function timeOfDay(minutes) {
  return `${ zeroPad(getHour(minutes)) }:${ zeroPad(getMinute(minutes)) }`;
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));

