let rl = require('readline-sync');

let noun = rl.question('Enter a noun: ');
let verb = rl.question('Enter a verb: ');
let adj = rl.question('Enter an adjective: ');
let adv = rl.question('Enter and adverb: ');

console.log(`Do you ${ verb } your ${ adj } ${ noun } ${ adv }? That's hilarious!`);
