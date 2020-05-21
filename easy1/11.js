/*

Write a function that determines and returns the ASCII string value of a string
passed in as an argument. The ASCII string value is the sum of the ASCII values
of every character in the string. (You may use String.prototype.charCodeAt() to
determine the ASCII value of a character.)


Understand the problem

Inputs:
  - string
Outpus:
  - number
    - sum of ASCII values of characters in string

Algorithm:
  Loop through each character of string
    Determine ASCII value using charCodeAt() method, add to sum
  Return sum

*/

function asciiValue(string) {
  let asciiSum = 0;

  for (let i = 0; i < string.length; i += 1) {
    asciiSum += string.charCodeAt(i);
  }
  
  return asciiSum;
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));
