const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const WINNING_COMBINATIONS = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function isWinningChoice(playerChoice, opposingPlayerChoice) {
  return WINNING_COMBINATIONS[playerChoice] === opposingPlayerChoice;
}

while (true) {
  prompt('----------------------');
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (isWinningChoice(choice, computerChoice)) {
    prompt('You win!');
  } else if (isWinningChoice(computerChoice, choice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }

  prompt('Play again? (y/n)');
  let playAgain = readline.question();
  while (playAgain !== 'y' && playAgain !== 'n') {
    prompt('Enter y or n');
    playAgain = readline.question();
  }

  if (playAgain === 'n') break;
}


