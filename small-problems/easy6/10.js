/*
  Input:
    - 1 string
      - contains one or more words
  Output:
    - 1 string
      - return string containing words from input
      - all words with length >= 5 should have letters reversed
*/

function reverseOneWord(word) {
  return word.split('').reverse().join('');
}

function reverseWords(sentence) {
  let reversedWords = sentence.split(' ').map(word => {
    if (word.length >= 5) {
      return reverseOneWord(word);
    } else {
      return word;
    }
  });

  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
