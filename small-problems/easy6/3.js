/*
  Input: 
    - 1 number
      - positive integer
  Output:
    - 1 number
      - positive integer
      - reverse of input digits

  Algorithm
    Convert input to string, split input into array
    Reverse array
    Return join of reversed array
*/

function reverseNumber(number) {
  return parseInt(String(number).split('').reverse().join(''), 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1