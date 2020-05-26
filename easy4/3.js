let rl = require('readline-sync');

let currentAge = parseInt(rl.question('What is your age? '));
let retireAge = parseInt(rl.question('At what age would you like to retire? '));

let yearsUntilRetirement = retireAge - currentAge;

let currentYear = (new Date()).getFullYear();
let retireYear = currentYear + yearsUntilRetirement;

console.log(`It's ${ currentYear }. You will retire in ${ retireYear }.`);
console.log(`You have only ${ yearsUntilRetirement } years of work to go!`);
