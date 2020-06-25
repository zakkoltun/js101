const rl = require('readline-sync');

function prompt(message) {
  console.log('=> ' + message);
}

function validLoanAmount(loanAmount) {
  return isNumeric(loanAmount) && loanAmount > 0;
}

function validAPR(apr) {
  return isNumeric(apr) && apr > 0;
}

function validLoanDuration(loanDuration) {
  return isNumeric(loanDuration);
}

function isNumeric(string) {
  return !!string && string.trim() && !isNaN(string);
}

while (true) {

  prompt('\nMortgage Calculator');

  prompt('What is the loan amount?');

  let loanAmount = rl.question();
  while (!validLoanAmount(loanAmount)) {
    prompt('Enter a valid loan amount');
    loanAmount = rl.question();
  }

  loanAmount = Number(loanAmount);


  prompt('What is the APR? (Enter in number form)');

  let apr = rl.question();
  while (!validAPR(apr)) {
    prompt('Enter a valid APR');
    apr = rl.question();
  }

  apr = Number(apr) / 100;


  prompt('What is the loan duration, in months?');

  let loanDurationInMonths = rl.question();
  while (!validLoanDuration(loanDurationInMonths)) {
    prompt('Enter a valid loan amount');
    loanDurationInMonths = rl.question();
  }

  loanDurationInMonths = Number(loanDurationInMonths);


  let monthlyInterest = apr / 12;

  let monthlyPayment = loanAmount * (monthlyInterest / (1 - Math.pow(
    (1 + monthlyInterest), (-loanDurationInMonths))));

  prompt(`Monthly payment is: $${ monthlyPayment.toFixed(2) }`);

  prompt('Another calculation? (y/n)');
  let answer = rl.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Enter y or n');
    answer = rl.question.lowerCase();
  }

  if (answer === 'n') {
    break;
  }
}
