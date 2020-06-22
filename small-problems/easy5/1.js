/*
  Input:
    - 1 floating point number
      - between 0 and 360
  Output:
    - 1 string
      - format: [degrees]˚[minutes]'[seconds]"

*/

function dms(decimalDegrees) {
  let degrees = Math.trunc(decimalDegrees);
  let minutes = Math.trunc((decimalDegrees - degrees) * 60);
  let seconds = Math.trunc((decimalDegrees - degrees - minutes/60) * 3600);

  return degrees + '˚' + minutes + "'" + seconds + '"';
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
