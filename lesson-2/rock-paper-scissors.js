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

function displayWinner(choice, computerChoice, playerWins, computerWins) {
  let winner = pickWinner(choice, computerChoice);

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


function startsWith(string, startingChars) {
  let regex = new RegExp('^' + startingChars, 'g');
  return regex.test(string);
}

// Gets the shortest unique abbreviation of each word in list
// Ex. abbreviations(['rock', 'paper', 'scissors', 'spock'])
//   => ['r', 'p', 'sc', 'sp']
function abbreviations(words) {
  let startingStrings = [];

  words.forEach((word, idx1) => {
    for (let i = 1; i <= word.length; i += 1) {
      let lettersToCheck = word.slice(0, i);

      let wordsWithSameStart = words.filter((otherWord, idx2) => {
        return (idx1 !== idx2 && startsWith(otherWord, lettersToCheck));
      });

      if (wordsWithSameStart.length === 0) {
        startingStrings.push(lettersToCheck);
        break;
      }
    }
  });

  return startingStrings;
}

// Maps a list of abbreviations to the corresponding words
// Ex: ['sc', 'sp], ['scissors', 'spock'] => { sc: 'scissors', sp: 'spock' }
function mapAbbreviationsToWords(abbreviations, words) {
  let abbreviationsToWords = {};
  abbreviations.forEach(abbreviation => {
    let matchingWords = words.filter(word => startsWith(word, abbreviation));
    if (matchingWords.length === 1) {
      abbreviationsToWords[abbreviation] = matchingWords[0];
    }
  });

  return abbreviationsToWords;
}

let choiceAbbreviations = abbreviations(VALID_CHOICES);
let abbreviationsToWords =
  mapAbbreviationsToWords(choiceAbbreviations, VALID_CHOICES);

let playerWins = 0;
let computerWins = 0;

while (playerWins < 5 && computerWins < 5) {
  prompt('----------------------');
  prompt('First to 5 wins is the grand master!\n');
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice) &&
          !choiceAbbreviations.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  if (!VALID_CHOICES.includes(choice) && choiceAbbreviations.includes(choice)) {
    choice = abbreviationsToWords[choice];
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

  displayWinner(choice, computerChoice, playerWins, computerWins);
}

grandMaster(playerWins);

