function isConsonant(character) {
  let regex = /(?![aAeEiIoOuU])[a-zA-Z]/
  return regex.test(character);
}

function doubleConsonants(string) {
  let chars = string.split('');
  let doubled = chars.map(chr => isConsonant(chr) ? chr + chr : chr);
  return doubled.join('');
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
