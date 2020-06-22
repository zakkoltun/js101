/*
  Input: 
    - 1 string
      - Represents hours and minutes before/after midnight
      - hh:mm
  Output:
    - 1 number
      - in the range 0..1439
      - the number of minutes before/after midnight input string represents

  Algorithm (beforeMidnight):
    Split string around ':' into hour and minute
    Calculate hour delta
      (HOURS_IN_DAY - hour) % 24
    Calculate minute delta
      MINUTES_IN_HOUR - minute
    Return hour delta - minute delta

*/

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

function beforeMidnight(time) {
  let hour, minute;
  [hour, minute] = time.split(':').map(string => parseInt(string));

  let hourDelta = (HOURS_IN_DAY - hour) % HOURS_IN_DAY;
  let minuteDelta = minute;

  return (MINUTES_IN_HOUR * hourDelta) - minuteDelta;
}


function afterMidnight(time) {
  let hour, minute;
  [hour, minute] = time.split(':').map(string => parseInt(string));

  let hourDelta = hour % HOURS_IN_DAY;
  let minuteDelta = minute;

  return (MINUTES_IN_HOUR * hourDelta) + minuteDelta;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00"));
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34"));
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00"));

