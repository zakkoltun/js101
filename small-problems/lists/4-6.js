/*
  Input:
    - 1 string
  Output:
    - 1 array
      - all substrings that start from beginning of input, order short to long
*/

function substringsAtStart(string) {
  let substrings = [];

  for (let subLength = 1; subLength <= string.length; subLength += 1) {
    substrings.push(string.substring(0, subLength));
  }

  return substrings;
}


function substrings(string) {
  let substrings = [];

  for (let strPos = 0; strPos < string.length; strPos += 1) {
    let subsAtPos = substringsAtStart(string.slice(strPos));
    substrings = substrings.concat(subsAtPos);
  }

  return substrings;
}


function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(substring => isPalindrome(substring));
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
