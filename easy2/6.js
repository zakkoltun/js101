/* 

  Understand the problem

  Inputs:
    - string
    - assume input string contains at least two words
  Output:
    - string
    - next to last word from the input string

  Rules:
    - Words are any sequence of non-blank characters
    - (split on ' ')

  Algorithm:
    Split input string into array
    Return second to last element of array
*/

function penultimate(phrase) {
  let words = phrase.split(' ');

  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
