/*
  
  Write a program that asks the user to enter an integer greater than 0, then 
  asks whether the user wants to determine the sum or the product of all 
  numbers between 1 and the entered integer, inclusive.

  Understand the problem
    Input: 
      - Readline prompt (num)
        - 'Please enter an integer greater than 0: '
        - Gets a number from user
          - Must convert string -> number
      - Readline prompt (op)
        - 'Enter "s" to compute the sum, or "p" to compute the product. '
        - Gets a letter, s or p, to determine operation. Assume input is int?
    Output:
      - String
      - 'The [op] of the integers between 1 and [num] is [result]. 

    Examples / test cases:
      ----------
      Please enter an integer greater than 0: 5
      Enter "s" to compute the sum, or "p" to compute the product. s

      The sum of the integers between 1 and 5 is 15.

      ----------
      Please enter an integer greater than 0: 6
      Enter "s" to compute the sum, or "p" to compute the product. p

      The product of the integers between 1 and 6 is 720.

    Data Structures
      - Might not need any. Can use a variable and for loop.

    Algorithm:
      - Get inputs from user (number and operation)
      - Use for loop to either add or multiply number to return value
        - Start at input number, go down, and end at 1
      - Return value and put into output string
*/

let rl = require('readline-sync');

let number = Number.parseInt(rl.question('Please enter an integer greater than 0: '));
let operation = rl.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let result = 1;
let i = number;

switch (operation) {
  case 's':
    for (i; i > 1; i -= 1) {
      result += i;
    }
    break;
  case 'p':
    for (i; i > 0; i -= 1) {
      result *= i;
    }
    break;
}

console.log(`The product of integers between 1 and ${ number } is ${ result }`);

