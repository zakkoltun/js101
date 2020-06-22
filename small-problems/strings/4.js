/*
  Input:
    - 1 string
      - words are defined as any sequence as non-whitespace characters
  Output:
    - 1 string
      - first character of every word uppercase, other chars lowercase

  Algorithm:
    Split string into words
    For each word
      Capitalize first char
      Lowercase all other chars
    Join array into string and return
*/

function wordCap(string) {
  let words = string.split(' ');
  let cappedWords = words.map(word => 
    word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  return cappedWords.join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));
