const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const WINNING_CHOICES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['paper', 'spock']
};

const RESULT_RESPONSES = {
  player: 'You win!',
  computer: 'Computer wins!',
  tie: "It's a tie"
};

let playerWins = 0;
let computerWins = 0;


function prompt(message) {
  console.log(`=> ${message}`);
}

function pickWinner(choice, computerChoice) {
  if (WINNING_CHOICES[choice].includes(computerChoice)) {
    return 'player';
  } else if (WINNING_CHOICES[computerChoice].includes(choice)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function displayWinner(choice, computerChoice, winner) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  prompt(RESULT_RESPONSES[winner]);
  prompt(`You have ${playerWins} wins, computer has ${computerWins}`);
}

function grandMaster(playerWins) {
  if (playerWins === 5) {
    prompt('You are the Grandmaster!!');
  } else {
    prompt('Computer is the Grandmaster!');
  }
}


while (playerWins < 5 && computerWins < 5) {
  prompt('----------------------');
  prompt('First to 5 wins is the grand master!\n');
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  let winner = pickWinner(choice, computerChoice);

  switch (winner) {
    case 'player':
      playerWins += 1;
      break;
    case 'computer':
      computerWins += 1;
      break;
  }

  displayWinner(choice, computerChoice, winner);
}

grandMaster(playerWins);

