/*
  Input:
    - 1 string
  Output:
    - boolean
  
  Rules:
    - String must be same forwards and backwards
    - Case sensitive ('Noon' => false, 'noon' => true)
    - All charcters must be considered (non-alphabetic included)
*/

function isPalindrome(string) {
  return string === reverse(string);
}

function reverse(string) {
  return string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  return isPalindrome(string.toLowerCase().replace(/\W/g, ''));
}

function isPalindromicNumber(number) {
  return isPalindrome(number.toString());
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
