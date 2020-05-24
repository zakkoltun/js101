/* 
  Input
    - 1 string
  Output
    - 1 string
      - input string with non-alphabetic characters removed
      - consecutive duplicate non-alphabetic characters result in 1 space

  Algorithm
    Replace non-alphabetic characters with ' '
    Remove consecutive spaces
*/

function cleanUp(string) {
  let allAlphabetic = string.replace(/\W/g, ' ');
  let noExtraSpaces = allAlphabetic.replace(/ {2,}/g, ' '); 
  
  return noExtraSpaces;
}

console.log(cleanUp("---what's my +*& line?")); 
