/*
  Inputs:
    - 1 string
      - Can be any length, including 0
      - Question: case sensitive? Going to assume case insensitive
  Output:
    - 1 string
      - input string with consecutive duplicate characters removed
  
  Algorithm 1:
    - Create return array (initialize empty array)
    - Split input string into array of characters
    - For each character in array
      - Pop first character (shift) from input string array
      - If first char from input is same as first char of return array
        then push char to return array
    - Return new array
*/

function crunch(string) {
  let crunched = '';
  let inputArr = string.split('');

  while (inputArr.length > 0) {
    let inputChar = inputArr.shift(); // remove first character of input
    if (crunched[crunched.length - 1] !== inputChar) {
      crunched += inputChar;
    }
  }

  return crunched;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
