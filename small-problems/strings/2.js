function removeVowels(strings) {
  return strings.map(string => 
    string.split('').filter(letter => /[^aeiou]/i.test(letter)).join('')
  );
}

// could have used string replace with regex instead

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
