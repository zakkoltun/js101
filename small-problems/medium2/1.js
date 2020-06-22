/*
  Input:
    - 1 string
      - will always contain at least one char
  Output:
    - 1 object
      - contains:
        1. percent of chars in the string that are lowercase
        2. percent of chars that are uppercase
        3. percent of chars that are neither
      - format:
        { lowercase: %, uppercase: %, neither: % }
      - Round percentages to two decimal digits, convert to string
      - Spaces count as characters
*/

function letterPercentages(string) {
  let chars = string.split('');
  let totalChars = chars.length;

  let lowerCount = 0;
  let upperCount = 0;
  let neitherCount = 0;

  chars.forEach(char => {
    if (/[a-z]/.test(char)) {
      lowerCount += 1;
    } else if (/[A-Z]/.test(char)) {
      upperCount += 1;
    } else {
      neitherCount += 1;
    }
  });

  let percentages = {
    lowercase: percent(lowerCount, totalChars),
    uppercase: percent(upperCount, totalChars),
    neither: percent(neitherCount, totalChars)
  };

  return percentages;

}


function percent(num, total) {
  return ((num / total) * 100).toFixed(2);
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


