/*
  Input:
    - 1 number
      - positive integer
  Output:
    - 1 array
      - list of the digits in input number

  Algorithm:
    Convert input integer to string
    Split string into array of characters
    Map array of characters to numbers, return result
*/

function digitList(number) {
  let digits = number.toString().split('');
  return digits.map(digit => parseInt(digit));
}

console.log(digitList(12345));
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));
