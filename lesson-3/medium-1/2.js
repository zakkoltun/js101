let munstersDescription = "The Munsters are creepy and spooky.";

let caseReversed = munstersDescription
  .split('')
  .map(char => char === char.toUpperCase() ? 
    char.toLowerCase() : 
    char.toUpperCase())
  .join('');

console.log(caseReversed);
