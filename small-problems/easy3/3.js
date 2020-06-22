/*
  Inputs:
    - 1 number
      - positive integer
  Output:
    - 1 string
      - alternating 1's and 0's, starting with 1
      - length determined by input integer

  Algorithm:
    - maintain result string (initialize empty)
    - while input is greater than 0
      - add the result of input % 2 to beginning of result string
      - decrement input integer
    - return result string
*/

function stringy(num) {
  let string = '';
  
  while (num > 0) {
    string = (num % 2) + string;
    num -= 1;
  }

  return string;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
