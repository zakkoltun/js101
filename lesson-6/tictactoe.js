// Constants
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const GAMES_PER_MATCH = 2;
const BOARD_LENGTH = 3;

const FIRST_PLAYER = 'choose'; // can be 'player', 'computer', or 'choose'

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const PLAYER_MOVE_FUNCTION = {
  player: playerChoosesSquare,
  computer: computerChoosesSquare
};

let readline = require('readline-sync');


function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

function getEmptySquares(board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });
}

function playerChoosesSquare(board) {
  let square;

  let emptySquares = getEmptySquares(board);

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares)}):`);
    square = readline.question().trim();

    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice");
  }

  board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let emptySquares = getEmptySquares(board);

  if (offensiveMoveAvailable(board)) {
    board[offensiveMove(board)] = COMPUTER_MARKER;
  } else if (defensiveMoveAvailable(board)) {
    board[defensiveMove(board)] = COMPUTER_MARKER;
  } else if (emptySquares.includes('5')) {
    board['5'] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares.length);

    let square = emptySquares[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function smartMove(board, playerToBlock) {
  function findAtRiskSquare(line) {
    let lineValues = getLineValues(board, line);
    if (count(lineValues, playerToBlock) === BOARD_LENGTH - 1 &&
        count(lineValues, INITIAL_MARKER) === 1) {
      return line[lineValues.indexOf(INITIAL_MARKER)];
    }
    return null;
  }

  function hasAtRiskSquare(line) {
    return !!findAtRiskSquare(line);
  }

  for (let lineNum = 0; lineNum < WINNING_LINES.length; lineNum++) {
    let line = WINNING_LINES[lineNum];
    if (hasAtRiskSquare(line)) {
      return findAtRiskSquare(line);
    }
  }

  return null;
}

function offensiveMove(board) {
  // An offensive move for the computer fills a row dominated by computer
  return smartMove(board, COMPUTER_MARKER);
}

function offensiveMoveAvailable(board) {
  return !!offensiveMove(board);
}

function defensiveMove(board) {
  // A defensive move by the computer blocks row dominated by player
  return smartMove(board, PLAYER_MARKER);
}

function defensiveMoveAvailable(board) {
  return !!defensiveMove(board);
}

function getLineValues(board, line) {
  return line.map(square => board[square]);
}

function boardFull(board) {
  return getEmptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function lineConsistsOf(board, line, marker) {
  return line.every(square => board[square] === marker);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    if (lineConsistsOf(board, WINNING_LINES[line], PLAYER_MARKER)) {
      return 'Player';
    } else if (lineConsistsOf(board, WINNING_LINES[line], COMPUTER_MARKER)) {
      return 'Computer';
    }
  }
  return null;
}

function joinOr(arr, delim = ', ', conj = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return String(arr[0]);
    case 2:
      return `${arr[0]} ${conj} ${arr[1]}`;
    default:
      return arr.slice(0, arr.length - 1).join(delim) +
            `${delim}${conj} ${arr[arr.length - 1]}`;
  }
}

function count(arr, val) {
  return arr.filter(elem => elem === val).length;
}

function determineFirstPlayer() {
  let firstPlayer;

  if (FIRST_PLAYER !== 'choose') {
    firstPlayer = FIRST_PLAYER;
  } else {
    prompt("Who will go first? (Enter 'player' or 'computer')");
    firstPlayer = readline.question();

    while (!['computer', 'player'].includes(firstPlayer)) {
      prompt("Invalid answer. Enter 'player' or 'computer'.");
      firstPlayer = readline.question();
    }
  }

  return firstPlayer;
}

function determinePlayerOrder(firstPlayer) {
  let playerOrder = firstPlayer === 'player' ?
    ['player', 'computer'] :
    ['computer', 'player'];
  return playerOrder;
}

function playersTakeTurns(board, players) {
  function alternatePlayer(player) {
    let newPlayerIdx = Math.abs(players.indexOf(player) - 1);
    return players[newPlayerIdx];
  }

  let currentPlayer = players[0];

  while (true) {
    displayBoard(board);

    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
}

function chooseSquare(board, player) {
  PLAYER_MOVE_FUNCTION[player](board);
  displayBoard(board);
}

// ----------------------------

while (true) {
  let playerWins = 0;
  let computerWins = 0;

  let firstPlayer = determineFirstPlayer();
  let playerOrder = determinePlayerOrder(firstPlayer);

  while (playerWins < GAMES_PER_MATCH && computerWins < GAMES_PER_MATCH) {
    let board = initializeBoard();

    playersTakeTurns(board, playerOrder);

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);

      switch (winner) {
        case 'Player':
          playerWins += 1;
          break;
        case 'Computer':
          computerWins += 1;
          break;
      }

      prompt(`${winner} won!`);
    } else {
      prompt("It's a tie");
    }
    prompt(`Your score: ${playerWins}. Computer score: ${computerWins}`);

    prompt('Press any key to continue.');
    readline.question();
  }

  prompt('Play again? (y/n)');
  let answer = readline.question();
  //if (answer !== 'y') break;
  while (!['y', 'n'].includes(answer)) {
    prompt('Please enter y or n:');
    answer = readline.question();
  }
  if (answer === 'n') break;
}

prompt('Thanks for playing Tic Tac Toe!');