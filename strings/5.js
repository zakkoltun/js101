/*
  Input: 
    - 1 string
  Output:
    - 1 string
      - input with upper changed to lower, and vice versa

*/

function swapCase(string) {
  return string.replace(/[a-zA-Z]/g, changeCase)
}

function changeCase(letter) {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
