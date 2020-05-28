/*
  Input: 
    - 1 number
      - positive or negative integer
  Output:
    - 1 number
      - if input is positive, return negative of it
      - if input is negative, return input

  Examples:
    5 => -5
    -3 => -3
    0 => -0

  Algorithm:
    If input >= 0, return -input
    If input < 0, return input
*/

function negative(number) {
  let result = number >= 0 ? -number : number;
  return result;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
