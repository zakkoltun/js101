const BUST_LIMIT = 32;
const DEALER_HIT_LIMIT = 27;
const ACE_VALUE_HIGH = 11;
const STARTING_CARD_COUNT = 3;
const WINS_PER_MATCH = 3;

const CARD_VALUES = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10',
  'J', 'Q', 'K', 'A'
];
const CARD_SUITES = [
  'H', 'C', 'S', 'D'
];

let readline = require('readline-sync');

function prompt(message) {
  console.log('=> ' + message);
}

function displayDivider() {
  console.log('\n-------------------------------------------\n');
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
  return deck;
}

// input: none, output: 2D array
// cards are represented as arrays: [value, suite]
function initializeDeck() {
  let deck = [];
  CARD_VALUES.forEach(value => {
    CARD_SUITES.forEach(suite => {
      deck.push([value, suite]);
    });
  });

  return shuffle(deck);
}

// input: arr, output: string
// formats a card into a string 'value_suite' for printing
function formatCard(card) {
  let [value, suite] = card;
  return `${value}_${suite}`;
}

// input: 2D arr, output: string
// formats a hand into a string for printing
// Ex: [[3, D], [A, H], [Q, S]] => '3_D, A_H, Q_S'
function formatHand(hand) {
  return hand.map(card => formatCard(card)).join(', ');
}

// input: arr, output: string
// used to select the value in a card array
function cardValue(card) {
  return card[0];
}

// input: 2D arr, output: string
// Given a hand, returns the top card formatted as a string
function revealFirstCard(hand) {
  return formatCard(hand[0]);
}

function displayGameInfo(hands, totals) {
  console.clear();

  prompt('TWENTY ONE\n');

  prompt(`Your hand: ${formatHand(hands.player)}`);
  prompt(`Dealer's top card: ${revealFirstCard(hands.dealer)}\n`);
  prompt(`Your hand total: ${totals.player}`);
}

// removes card from top of deck and adds to hand
// mutates both deck and hand
function drawCard(deck, hand) {
  let card = deck.shift();
  hand.push(card);
}

function dealHands(deck, hands) {
  let cardNumber = 1;

  while (cardNumber <= STARTING_CARD_COUNT) {
    Object.values(hands).forEach(hand => {
      drawCard(deck, hand);
    });
    cardNumber++;
  }
}

function countAcesInHand(hand) {
  return hand.filter(card => cardValue(card) === 'A').length;
}

// input: arr, output: number or string
// takes a card value and outputs the corresponding number value
// for aces, returns 'A', so value can be determined later
function nonAceCardValue(card) {
  switch (cardValue(card)) {
    case 'J':
    case 'Q':
    case 'K':
      return 10;
    case 'A':
      return 'A';
    default:
      return Number(cardValue(card));
  }
}

// input: arr, output: num
// adds up numeric values in input. Ex: ['A', 7, 3] => 10
function addNumberValues(list) {
  return list.reduce((total, curr) => {
    return total + Number(curr) || total;
  }, 0);
}

// input: arr, output: arr
// converts hand of strings to their number values
function values(hand) {
  let total = totalExcludingAces(hand); // excludes aces
  let handVals = valuesExcludingAces(hand);

  let numAces = countAcesInHand(hand);

  handVals.forEach((card, idx) => {
    if (card === 'A') {
      numAces--;
      handVals[idx] = total + numAces <= BUST_LIMIT - ACE_VALUE_HIGH ?
        ACE_VALUE_HIGH : 1;
      total += handVals[idx];
    }
  });
  return handVals;
}

// input: arr, output: number
// returns the total value of cards in a hand (including aces)
function total(hand) {
  let handVals = values(hand);
  return addNumberValues(handVals);
}

function totalExcludingAces(hand) {
  return addNumberValues(valuesExcludingAces(hand));
}

function valuesExcludingAces(hand) {
  return hand.map(card => nonAceCardValue(card));
}

function isBust(handTotal) {
  return handTotal > BUST_LIMIT;
}

function bustMessage() {
  console.clear();
  prompt('Your hand is a bust!');
}

function stayMessage() {
  console.clear();
  prompt('You chose to stay.');
}

function determineWinner(totals) {
  if (isBust(totals.player)) {
    return 'dealer';
  } else if (isBust(totals.dealer)) {
    return 'player';
  } else if (totals.player > totals.dealer) {
    return 'player';
  } else if (totals.player < totals.dealer) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function displayResults(hands, totals) {
  console.log();

  prompt(`Your hand: ${formatHand(hands.player)}. Score: ${totals.player}`);
  prompt(`Dealer hand: ${formatHand(hands.dealer)}. Score: ${totals.dealer}`);

  console.log();

  switch (determineWinner(totals)) {
    case 'player':
      prompt('You won!');
      break;
    case 'dealer':
      prompt('Dealer won. Better luck next time!');
      break;
    default:
      prompt('Tie!');
      break;
  }
}

function determineMatchWinner(wins) {
  let winner = wins.player === WINS_PER_MATCH ? 'player' : 'dealer';
  return winner;
}

function displayMatchWinner(wins) {
  switch (determineMatchWinner(wins)) {
    case 'player':
      prompt('You won the match!');
      break;
    case 'dealer':
      prompt('Dealer won the match.');
      break;
  }
}

// input: none, output: boolean
function playAgain() {
  prompt(`Play another match? (y/n)`);
  let answer = readline.question();

  while (!['y', 'n'].includes(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question();
  }

  if (answer === 'y') {
    return true;
  } else {
    return false;
  }
}

// input: none, output: string
// Asks user for an action. Keep asking until valid answer given
function getPlayerAction() {
  prompt("Hit or stay? (Enter 'h' or 's')");
  let action = readline.question();

  while (!['h', 's'].includes(action)) {
    prompt("Please enter 'h' or 's'");
    action = readline.question();
  }
  return action;
}

// input: three objects, output: none
// Mutates deck, hands, and totals
// Interacts with player to determine actions (hit or stay)
function playerTurn(deck, hands, totals) {
  while (true) {
    displayGameInfo(hands, totals);

    let action = getPlayerAction();

    if (action === 'h') {
      drawCard(deck, hands.player);
      totals.player = total(hands.player);

      displayResults(hands, totals);
    }

    if (action === 's' || isBust(totals.player)) break;
  }
}

// input: three objects, output: none
// Takes dealer turn(s). Hit until dealer's total reaches hit limit, then stay
function dealerTurn(deck, hands, totals) {
  while (true) {
    if (totals.dealer > DEALER_HIT_LIMIT || isBust(totals.dealer)) break;
    drawCard(deck, hands.dealer);
    totals.dealer = total(hands.dealer);
  }
}

// ----------------------------------------------------------------------

// Game logic

while (true) {

  let wins = {
    player: 0,
    dealer: 0
  };

  while (true) {
    let deck = initializeDeck();

    let hands = {
      player: [],
      dealer: []
    };

    dealHands(deck, hands);

    let totals = {
      player: total(hands.player),
      dealer: total(hands.dealer)
    };

    while (true) {
      // player actions
      playerTurn(deck, hands, totals);

      if (isBust(totals.player)) {
        bustMessage();
        break;
      } else {
        stayMessage();
      }

      dealerTurn(deck, hands, totals);

      break;
    }

    displayResults(hands, totals);

    let winner = determineWinner(totals);

    switch (winner) {
      case 'player':
        wins.player++;
        break;
      case 'dealer':
        wins.dealer++;
        break;
    }

    displayDivider();
    prompt(`Your wins: ${wins.player}`);
    prompt(`Dealer wins: ${wins.dealer}`);

    if (wins.player === WINS_PER_MATCH || wins.dealer === WINS_PER_MATCH) {
      displayDivider();
      displayMatchWinner(wins);
      break;
    }

    prompt('Press any key to start next match');
    readline.question();

  }

  if (!playAgain()) break;
}
