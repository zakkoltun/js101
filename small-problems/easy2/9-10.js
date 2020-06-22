/*

  Algorithm:
    Initialize value to 0
    Loop through each character of string (last to first)
      Determine number from map of characters to numbers
      On each loop, multiply digit counter by 10
      Multipy number by digit counter (1, 10, 100, etc) & add to return value
    Return value
*/

const CHAR_TO_NUM = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
}


function stringToInteger(string) {
  let numberValue = 0;
  let digitPlace = 1; // indicates which digit (1, 10, 100, etc)
  for (let strIndex = string.length - 1; strIndex >= 0; strIndex -= 1) {
    let digit = CHAR_TO_NUM[string[strIndex]];
    numberValue += digit * digitPlace;

    digitPlace *= 10;
  }
  
  return numberValue;
}

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return -1 * stringToInteger(string.slice(1));
  } else if (string[0] === '+') {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
