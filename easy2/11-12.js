/*
  Select 1's digit:
    num % 10
  Remove 1's digit:
    num = (num - 1's) / 10
*/

function integerToString(integer) {

  const INT_TO_CHAR = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  }

  let string = ''

  if (integer === 0) {
    return '0';
  }

  while (integer >= 1) { 
    let digit = integer % 10;
    string = INT_TO_CHAR[digit] + string;
    integer = (integer - digit) / 10;
  } 

  return string;
}


function signedIntegerToString(integer) {
  switch (Math.sign(integer)) {
    case 1:
      return '+' + integerToString(integer);
      break;
    case -1:
      return '-' + integerToString(integer * -1);
      break;
    default:
      return integerToString(integer);
      break;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
