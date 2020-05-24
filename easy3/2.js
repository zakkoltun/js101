/*
  Input:
    - 1 string
  Output:
    - Write input string to console inside a box

  Rules:
    - Corners are '+' signs
    - Horizontal borders in between corners are '-' signs
    - Vertical borders in between corners are '|'
    - 1 space of padding between phrase and border on all 4 sides 

  Notes:
    - Top & bottom line length is text.length + 4
      - '+' + ('-' * (text.length + 2)) + '+'
    - 2nd & 4th lines
      - '|' + (' ' * (text.length + 2)) + '|'
    - Middle (3rd) line
      - '| ' + text + ' |'
*/

function logInBox(text) {
  let topOrBottom = '+' + '-'.repeat(text.length + 2) + '+';
  let emptyLine = '|' + ' '.repeat(text.length + 2) + '|';

  console.log(topOrBottom);
  console.log(emptyLine);
  console.log('| ' + text + ' |');
  console.log(emptyLine);
  console.log(topOrBottom);
}

logInBox('');
logInBox('hello');
