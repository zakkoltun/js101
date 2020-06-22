/*
  Inputs:
    - 1 number
      - represents a year
  Output:
    - string
      - begins with century number
      - ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number


  General case (suffixes)
    _1: st
    _2: nd
    _3: rd
    _4: th
    _5: th
    _6: th
    _7: th
    _8: th
    _9: th
    _0: th

  Special cases
    11-13: th

  Algorithm (century suffix):
    if second to last digit is not 1
      if last digit is 1
        return century + 'st'
      if last digit is 2
        return century + 'nd'
      if last digit is 3
        return century + 'rd'
  else
    return century + 'th'

  
  Algorithm (determine century number):
    

*/

function addCenturySuffix(centuryNum) {
  let century = centuryNum.toString();
  let secondToLastDigit = century.slice(-2, -1);
  let lastDigit = century.slice(-1);

  if (secondToLastDigit !== '1') {
    switch (lastDigit) {
      case '1':
        return century + 'st';
        break;
      case '2':
        return century + 'nd';
        break;
      case '3':
        return century + 'rd';
        break;
      default:
        return century + 'th';
        break;
    }
  } else {
    return century + 'th';
  }
}


function century(year) {
  let century = Math.trunc((year-1) / 100) + 1;
  return addCenturySuffix(century);
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1042));
