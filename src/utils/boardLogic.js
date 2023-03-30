function isThereWinner(board, player) {
  const { length } = board;

  // Check rows
  for (let x = 0; x < length; x++) {
    const row = board[x];

    if (row.every((square) => square === player)) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < length; col++) {
    let row = 0;
    for (row; row < length; row++) {
      if (board[row][col] != player) {
        break;
      }
    }

    if (row === length) return true;
  }

  // Check diagonal from topLeft[0,0] to bottomRight[n,n]
  let position = 0;
  for (position; position < length; position++) {
    if (board[position][position] != player) {
      break;
    }
  }
  if (position === length) return true;

  // Check diagonal from topRight[0,n] to bottomLeft[n,0]
  position = 0;
  for (position; position < length; position++) {
    if (board[position][length - position - 1] != player) {
      break;
    }
  }
  if (position === length) return true;

  return false;
}

function isEndGame(board) {
  for (let x = 0; x < board.length; x++) {
    const row = board[x];

    if (row.some((square) => square === null)) {
      return false;
    }
  }

  return true;
}

function createBoard(length) {
  const matrix = [];

  for (let i = 0; i < length; i++) {
    const row = [];
    for (let j = 0; j < length; j++) {
      row.push(null);
    }
    matrix.push(row);
  }

  return matrix;
}

export { isThereWinner, isEndGame, createBoard };
