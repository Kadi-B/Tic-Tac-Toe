let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Function to handle square click
function squareClick(event) {
  const squareId = event.target.id;
  const squareIndex = squareId.split('-')[1] - 1;
  
  if (gameOver || gameBoard[squareIndex] !== '') return;
  
  gameBoard[squareIndex] = currentPlayer;
  document.getElementById(squareId).textContent = currentPlayer;
  
  checkWinner();
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] && gameBoard[a] !== '') {
      gameOver = true;
      alert(`Player ${gameBoard[a]} wins!`);
      return;
    }
  }
  
  if (!gameBoard.includes('')) {
    gameOver = true;
    alert('It\'s a draw!');
  }
}

// Function to reset game
function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  
  document.querySelectorAll('.square').forEach(square => square.textContent = '');
}

// Add event listeners
document.querySelectorAll('.square').forEach(square => square.addEventListener('click', squareClick));
document.getElementById('reset-button').addEventListener('click', resetGame);