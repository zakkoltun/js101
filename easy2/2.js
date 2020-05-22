let rl = require('readline-sync');

let name = rl.question('What is your name? ');

if (name.slice(-1) === '!') {
  console.log(`HELLO ${ name.slice(0, -1).toUpperCase() }. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${ name }`);
}


