/* 

  Understand the problem

  Inputs:
    - 2 inputs of any type
    - Must be converted to truthy value
  Output:
    - Boolean

  Rules:
    - Return true if exactly one of the inputs is truthy
    - Return false otherwise:
      - if both are false
      - if both are true
*/

function xor(item1, item2) {
  return !!item1 !== !!item2;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
