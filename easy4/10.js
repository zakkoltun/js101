/*
  Input:
    - 1 string
      - words separated by spaces
        - assume every word contains at least one letter
        - string will always contain at least one word
        - each string contains nothing but words and spaces
          - no leading, trailing, or repeated spaces
  Output:
    - 1 string
      - swap the first and last letter of each word

  Algorithm:
    Split string into array of words
    Using map, create an array where each word has first/last letter swapped
      Temporarily store last letter
      Set last char to first char
      Set first char to stored last letter
    Return new array joined into string
*/

function swap(string) {
  let words = string.split(' ');
  return words.map(word => swapOneWord(word)).join(' ');
}

function swapOneWord(word) {
  let letters = word.split('');

  let last = letters[letters.length - 1];
  letters[letters.length - 1] = letters[0];
  letters[0] = last;

  return letters.join('');
}

console.log(swap('Hello there'));
console.log(swap('Oh what a wonderful day it is'));

