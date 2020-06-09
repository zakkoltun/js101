/*
  Input:
    - 1 array
      - must verify if input is an array
      - check if input is empty array

  Output:
    - 1 array
      - move first element to end of array
      - don't modify original array
      - if input isn't valid, return undefined
      - if input is empty array, return empty array
*/

function rotateArray(input) {
  if (!Array.isArray(input)) {
    return undefined;
  }

  if (input.length === 0) {
    return [];
  }

  return input.slice(1).concat(input[0]);
}


function rotateRightmostDigits(number, count) {
  let string = String(number);
  let rotateIndex = string.length - count;

  let firstPart = string.slice(0, rotateIndex);
  let rotatedPart = rotateArray(string.split('').slice(rotateIndex)).join('');

  return parseInt(firstPart + rotatedPart, 10);
}


/* 
  3.

  Input:
    - 1 number
  Output:
    - 1 number
  
  735291
    352917
    3 29175
    32 1759
    321 597
    3215 79
    32157 9 => 321579

  105
    051
    0 15 => 15 (leading 0 dropped)

  12345
    23451
    2 4513
    24 135
    241 53
    2415 3 => 24153
*/

function maxRotation(number) {
  let currentRotation = number;
  let count = String(number).length;

  for (count; count >= 2; count -= 1) {
    currentRotation = rotateRightmostDigits(currentRotation, count);
  }

  return currentRotation;
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));
