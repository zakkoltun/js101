let rl = require('readline-sync');

let numbers = [];

numbers.push(rl.question('Enter the 1st number: '));
numbers.push(rl.question('Enter the 2nd number: '));
numbers.push(rl.question('Enter the 3rd number: '));
numbers.push(rl.question('Enter the 4th number: '));
numbers.push(rl.question('Enter the 5th number: '));

let numberToCheck = rl.question('Enter the last number: ');

if (numbers.includes(numberToCheck)) {
  console.log(`The number ${ numberToCheck } appears in ${ numbers.join(',') }.`);
} else {
  console.log(`The number ${ numberToCheck } does not appear in ${ numbers.join(',') }.`);
}

