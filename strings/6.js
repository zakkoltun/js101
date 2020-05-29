/*
  Input:
    - 1 string
  Output:
    - 1 string
      - Alternate case every character (upper, lower, upper, etc)
      - Non alphabetic are not affected, but count as characters
*/

function staggeredCase(string) {
  return string
    .split('')
    .map(function(char, index) {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));
