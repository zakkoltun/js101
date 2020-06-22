function diamond(n) {
  let numSpaces = Math.floor(n/2);
  let numStars = 1;

  while (numStars < n) {
    logRow(numSpaces, numStars);
    numSpaces -= 1;
    numStars += 2;
  }

  while (numStars > 0) {
    logRow(numSpaces, numStars);
    numSpaces += 1;
    numStars -= 2;
  }
}


function logRow(numSpaces, numStars) {
  let row = ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces);
  console.log(row);
}
  

//diamond(1);
//diamond(3);
//diamond(9);
diamond(15);
