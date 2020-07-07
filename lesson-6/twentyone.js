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

function displayGameInfo(playerHand, dealerHand, playerTotal) {
  console.clear();

  prompt(`Your hand: ${playerHand.join(', ')}`);
  prompt(`Dealer's top card: ${revealFirstCard(dealerHand)}\n`);
  prompt(`Your hand total: ${playerTotal}`);
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
function values(hand) {
  let total = totalExcludingAces(hand); // excludes aces
  let handVals = valuesExcludingAces(hand);

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
  return handTotal > 21;
}

function bustMessage() {
  console.clear();
  prompt('Your hand is a bust!');
}

function stayMessage() {
  console.clear();
  prompt('You chose to stay.');
}

function determineWinner(playerTotal, dealerTotal) {
  if (isBust(playerTotal)) {
    return 'dealer';
  } else if (isBust(dealerTotal)) {
    return 'player';
  } else if (playerTotal > dealerTotal) {
    return 'player';
  } else if (playerTotal < dealerTotal) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function displayResults(playerHand, dealerHand, playerTotal, dealerTotal) {
  console.log('\n');

  prompt(`Your hand: ${playerHand}. Score: ${playerTotal}`);
  prompt(`Dealer hand: ${dealerHand}. Score: ${dealerTotal}`);

  console.log('\n');

  switch (determineWinner(playerTotal, dealerTotal)) {
    case 'player':
      prompt('You won!!');
      break;
    case 'dealer':
      prompt('Dealer won. Better luck next time!');
      break;
    default:
      prompt('Tie!');
      break;
  }
}

function playAgain() {
  prompt(`Play again? (y/n)`);
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

// ----------------------------------------------------------------------

// Game logic

while (true) {
  let deck = initializeDeck();

  let playerHand = [];
  let dealerHand = [];

  dealHands(deck, [playerHand, dealerHand]);

  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  while (true) {
    // player actions
    while (true) {
      displayGameInfo(playerHand, dealerHand, playerTotal);

      prompt("Hit or stay? (Enter 'h' or 's')");
      let action = readline.question();

      while (!['h', 's'].includes(action)) {
        prompt("Please enter 'h' or 's'");
        action = readline.question();
      }

      if (action === 'h') {
        drawCard(deck, playerHand);
        playerTotal = total(playerHand);

        displayResults(playerHand, dealerHand, playerTotal, dealerTotal);
      }

      if (action === 's' || isBust(playerTotal)) break;
    }

    if (isBust(playerTotal)) {
      bustMessage();
      break;
    } else {
      stayMessage();
    }

    while (true) {
      if (dealerTotal > 17 || isBust(dealerTotal)) break;
      drawCard(deck, dealerHand);
      dealerTotal = total(dealerHand);
    }

    break;
  }

  displayResults(playerHand, dealerHand, playerTotal, dealerTotal);

  if (!playAgain()) break;
}