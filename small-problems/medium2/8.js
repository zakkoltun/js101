function longestSentence(paragraph) {
  let sentences = paragraph.match(/\w[^.?!]+(?=[.?!])[.!?]/g);

  return sentences.sort(compareNumOfWords)[0];
}

function compareNumOfWords(sentence1, sentence2) {
  let words1 = sentence1.split(' ');
  let words2 = sentence2.split(' ');

  return words2.length - words1.length;
}

console.log(longestSentence('Hello there! How are you doing?'));
console.log(longestSentence('Where do you think you\'re going? What\'s up Doc?'));
