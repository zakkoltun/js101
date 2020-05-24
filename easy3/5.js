/*
  Input:
    - 1 number
      - positive integer
      - specifies length of triangle sides (equilateral)
  Output:
    - logs a triangle made of asterisks to the console
  
  Example
    triangle(5)
      line 1: 4 spaces, 1 *
      line 2: 3 spaces, 2 *
      line 3: 2 spaces, 3 *
      line 4: 1 space,  4 *
      line 5: 0 spaces, 5 *

      number of lines = n (input)
      maintain variable for number of spaces
        - initialize to n - 1
      maintain variable for number of asterisks
        - initialize to 1
      concatenate spaces and asterisks

    Algorithm:
      Initialize spaces var to n - 1
      Initialize stars var to 1
      while spaces >= 0
        log (string with spaces) + (string with number of stars)
        decrement spaces by 1
        increment stars by 1

    Edge cases:
      input is 0
        - should already by handled by while loop condition
*/

function triangle(n) {
  let numSpaces = n - 1;
  let numStars = 1;

  while (numSpaces >= 0) {
    let line = ' '.repeat(numSpaces) + '*'.repeat(numStars);
    console.log(line);

    numSpaces -= 1;
    numStars += 1;
  }
}

triangle(5);
triangle(9);
