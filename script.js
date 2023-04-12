const BOARD_SIZE_X = 7;
const BOARD_SIZE_Y = 6;
const PLAYER1_COLOR = '#ff0000'; // Red
const PLAYER2_COLOR = '#00ff00'; // Green

let currentPlayer = 1;
let board = [];

// Function to create the game board
function createBoard() {
  const gameBoard = document.getElementById('game-board');
  for (let row = 0; row < BOARD_SIZE_Y; row++) {
    const newRow = gameBoard.insertRow();
    board[row] = [];
    for (let col = 0; col < BOARD_SIZE_X; col++) {
      const newCell = newRow.insertCell();
      newCell.className = 'empty';
      newCell.onclick = () => makeMove(row, col);
      board[row][col] = '';
    }
  }
}

// Function to handle player moves
function makeMove(row, col) {
  if (board[row][col] === '') {
    const cell = document.getElementById('game-board').rows[row].cells[col];
    if (currentPlayer === 1) {
      cell.style.backgroundColor = PLAYER1_COLOR;
      cell.innerText = 'X';
      board[row][col] = 'X';
      currentPlayer = 2;
    } else {
      cell.style.backgroundColor = PLAYER2_COLOR;
      cell.innerText = 'O';
      board[row][col] = 'O';
      currentPlayer = 1;
    }
  }
}

// Function to check for winning move
function checkWin() {
  // Implement your win-checking logic here
  // ...
}

// Function to reset the game
function resetGame() {
  const gameBoard = document.getElementById('game-board');
  // Clear the game board
  while (gameBoard.firstChild) {
    gameBoard.firstChild.remove();
  }
  // Reset game variables
  currentPlayer = 1;
  board = [];
  // Recreate the game board
  createBoard();
}

// Add event listener for reset button
document.getElementById('reset-button').addEventListener('click', resetGame);

// Call
createBoard();
