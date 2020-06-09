/*
  Input:
    - 1 string
      - Contains normal words and 'number words'
      - number words for 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  Output:
    - 1 string
      - input with 'number words' converted to numbers

  Algorithm:
    Create object mapping number words to number
    Split input into array
    Replace words in array using function argument
      If word is a number word (if exists in object)
        replace with object value, using word as key
    Return result of replace
*/

function wordToDigit(string) {

  let words = string.split(' ');

  return words
    .map(word => replaceNumberWord(word))
    .join(' ');
}

function replaceNumberWord(word) {

  const wordToNumber = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
  }
  
  let letters = onlyLetters(word);
  let punctuation = onlyPunctuation(word);

  let result = wordToNumber[letters] ?
    wordToNumber[letters] + punctuation :
    word;

  return result;
}


function onlyLetters(word) {
  return word.replace(/[.!?]+/g, '');
}

function onlyPunctuation(word) {
  return word.replace(/[^.!?]+/g, '');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

        


