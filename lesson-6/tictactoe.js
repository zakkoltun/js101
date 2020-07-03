const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WIN_GOAL = 5;
const BOARD_LENGTH = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
]; 

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
  if (offensiveMoveAvailable(board)) {
    board[offensiveMove(board)] = COMPUTER_MARKER;
  } else if (defensiveMoveAvailable(board)) {
    board[defensiveMove(board)] = COMPUTER_MARKER;
  } else {
    let emptySquares = getEmptySquares(board);
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

/*
function offensiveMove(board) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let line = WINNING_LINES[i];
    let lineValues = line.map(square => board[square]);
    if (count(lineValues, COMPUTER_MARKER) === 2 &&
        count(lineValues, INITIAL_MARKER) === 1) {
      let defensiveSquare = line[lineValues.indexOf(INITIAL_MARKER)];
      return defensiveSquare;
    }
  }
  return null;
}
*/

function offensiveMoveAvailable(board) {
  return !!offensiveMove(board);
}

function defensiveMove(board) {
  // A defensive move by the computer blocks row dominated by player
  return smartMove(board, PLAYER_MARKER);
}

/*
function defensiveMove(board) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let line = WINNING_LINES[i];
    let lineValues = line.map(square => board[square]);
    if (count(lineValues, PLAYER_MARKER) === 2 &&
        count(lineValues, INITIAL_MARKER) === 1) {
      let defensiveSquare = line[lineValues.indexOf(INITIAL_MARKER)];
      return defensiveSquare;
    }
  }
  return null;
}
*/

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

// ----------------------------

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie");
  }

  prompt('Play again? (y/n)');
  let answer = readline.question();
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');