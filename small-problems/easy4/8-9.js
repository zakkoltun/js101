/*
  Input:
    - 1 string
      - consists of 0 or more space separated words
  Output:
    - 1 object
      - key is a string representing the length of a word, value is the number
        of words with that length

  Algorithm:
    Split input string into array of words
    Create empty result object
    For each word in array
      Get length
      If length doesn't exist as key in result object
        Create key and set value to 1
      Otherwise, increment value of that key by 1
    Return result object
*/

function wordSizes(sentence) {
  let words = sentence.replace(/[^a-zA-Z0-9\s]/g, '').split(' ');
  let wordSizesCount = { };

  for (let i = 0; i < words.length; i += 1) {
    let wordLength = words[i].length;

    if (wordLength === 0) {
      continue;
    }

    if (!wordSizesCount[wordLength]) {
      wordSizesCount[wordLength] = 0;
    }

    wordSizesCount[wordLength] += 1;
  }

  return wordSizesCount;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
