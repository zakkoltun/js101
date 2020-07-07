const CARD_VALUES = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10',
  'J', 'Q', 'K', 'A'
];

let readline = require('readline-sync');

function prompt(message) {
  console.log('=> ' + message);
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
  return deck;
}

function initializeDeck() {
  let expandedValues = CARD_VALUES.map(val => [val, val, val, val]);
  let deck = [].concat(...expandedValues);

  return shuffle(deck);
}

function revealFirstCard(hand) {
  return hand[0];
}

function displayGameInfo(playerHand, dealerHand) {
  console.clear();

  prompt(`Your hand: ${playerHand.join(', ')}`);
  prompt(`Dealer's top card: ${revealFirstCard(dealerHand)}\n`);
  prompt(`Your hand total: ${handTotal(playerHand)}`);
}

// removes card from top of deck and adds to hand
// mutates both deck and hand
function drawCard(deck, hand) {
  hand.push(deck.shift());
}

function dealHands(deck, hands) {
  let cardNumber = 1;

  while (cardNumber <= 2) {
    hands.forEach(hand => {
      drawCard(deck, hand);
    });
    cardNumber++;
  }
}

function countAcesInHand(hand) {
  return hand.filter(card => card === 'A').length;
}

// input: str, output: number or string
// takes a card value and outputs the corresponding number value
// for aces, returns 'A', so value can be determined later
function nonAceCardValue(card) {
  switch (card) {
    case 'J':
    case 'Q':
    case 'K':
      return 10;
    case 'A':
      return 'A';
    default:
      return Number(card);
  }
}

function addNumberValues(list) {
  return list.reduce((total, curr) => {
    return total + Number(curr) || total;
  }, 0);
}

// input: arr, output: arr
// converts hand of strings to their number values
function handValues(hand) {
  let total = handTotalExcludingAces(hand); // excludes aces
  let handVals = handValuesExcludingAces(hand);

  let numAces = countAcesInHand(hand);

  handVals.forEach((card, idx) => {
    if (card === 'A') {
      numAces--;
      handVals[idx] = total + numAces <= 10 ? 11 : 1;
      total += handVals[idx];
    }
  });
  return handVals;
}

// input: arr, output: number
// returns the total value of cards in a hand (including aces)
function handTotal(hand) {
  let handVals = handValues(hand);
  return addNumberValues(handVals);
}

function handTotalExcludingAces(hand) {
  return addNumberValues(handValuesExcludingAces(hand));
}

function handValuesExcludingAces(hand) {
  return hand.map(card => nonAceCardValue(card));
}

function isBust(hand) {
  return handTotal(hand) > 21;
}

function isTwentyOne(hand) {
  return handTotal(hand) === 21;
}

function bustMessage() {
  console.clear();
  prompt('Your hand is a bust!');
}

function stayMessage() {
  console.clear();
  prompt('You chose to stay.');
}

function determineWinner(player, dealer) {
  if (isBust(player)) {
    return 'dealer';
  } else if (isBust(dealer)) {
    return 'player';
  } else if (handTotal(player) > handTotal(dealer)) {
    return 'player';
  } else if (handTotal(player) < handTotal(dealer)) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function displayResults(player, dealer) {
  console.log('\n');

  prompt(`Your hand: ${player}. Score: ${handTotal(player)}`);
  prompt(`Dealer hand: ${dealer}. Score: ${handTotal(dealer)}`);

  console.log('\n');

  prompt(`Winner: ${determineWinner(player, dealer)}`);
}

// ----------------------------------------------------------------------

// Game logic

let deck = initializeDeck();

let playerHand = [];
let dealerHand = [];

dealHands(deck, [playerHand, dealerHand]);

while (true) {
  // player actions
  while (true) {
    displayGameInfo(playerHand, dealerHand);

    prompt("Hit or stay? (Enter 'hit' or 'stay')");
    let action = readline.question();

    while (!['hit', 'stay'].includes(action)) {
      prompt("Please enter 'hit' or 'stay'");
      action = readline.question();
    }

    if (action === 'hit') {
      drawCard(deck, playerHand);
    }

    if (action === 'stay' || isBust(playerHand)) break;

    displayGameInfo(playerHand, dealerHand);
  }

  if (isBust(playerHand)) {
    bustMessage();
    break;
  } else {
    stayMessage();
  }

  while (true) {
    if (handTotal(dealerHand) > 17 || isBust(dealerHand)) break;
    drawCard(deck, dealerHand);
  }

  break;
}

displayResults(playerHand, dealerHand);