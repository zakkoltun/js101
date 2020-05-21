function tipCalculator() {
  let rl = require('readline-sync');

  let bill = Number.parseFloat(rl.question('What is the bill?\n'));
  let tipPercentage = Number.parseFloat(rl.question('What is the tip percentage?\n'));

  let tip = bill * (tipPercentage / 100);
  let total = bill + tip;

  console.log(`The tip is $${ tip.toFixed(2) }`);
  console.log(`The total is $${ total.toFixed(2) }`);
}

tipCalculator();
