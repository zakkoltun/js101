let rl = require('readline-sync');

let num1 = Number.parseInt(rl.question('==> Enter the first number:\n'));
let num2 = Number.parseInt(rl.question('==> Enter the second number:\n'));

console.log(`==> ${ num1 } + ${ num2 } = ${ num1 + num2 }`);
console.log(`==> ${ num1 } - ${ num2 } = ${ num1 - num2 }`);
console.log(`==> ${ num1 } * ${ num2 } = ${ num1 * num2 }`);
console.log(`==> ${ num1 } / ${ num2 } = ${ num1 / num2 }`);
console.log(`==> ${ num1 } % ${ num2 } = ${ num1 % num2 }`);
console.log(`==> ${ num1 } ** ${ num2 } = ${ num1 ** num2 }`);
