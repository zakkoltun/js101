/*
  Inputs:
    - 1 number
  Output:
    - 1 number
      - return input as-is if it's a double number
      - return input * 2 if it's not a double number

  Rules:
    Double numbers
      - must be even number of digits
      - left half of digits is same as right half

  Algorithm:

    Function to determine if double number:
      Convert number to string
      If length is odd, return false
      Compare left and right sides
        Left = slice(0, length / 2)
        Right = slice(length / 2)
        Return whether they're equal
*/

function doubleNumber(number) {
  let stringNum = number.toString();
  if (stringNum.length % 2 === 1) {
    return false;
  } else {
    let left = stringNum.slice(0, stringNum.length / 2);
    let right = stringNum.slice(stringNum.length / 2);

    return left === right;
  }
}

function twice(number) {
  let result = doubleNumber(number) ? number : number * 2;
  return result;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(103103));
console.log(twice(3333));
