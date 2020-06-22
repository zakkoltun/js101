function staggeredCase(string) {
  let chars = string.split('');
  let letterIndex = 0;

  let cased = chars.map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } 
    if (letterIndex % 2 === 0) {
      letterIndex += 1;
      return char.toUpperCase();
    } else {
      letterIndex += 1;
      return char.toLowerCase();
    }
  });

  return cased.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
