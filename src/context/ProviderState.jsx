import { useState, createContext } from 'react';
import confetti from 'canvas-confetti';

import { TURNS } from '../constants';
import { createBoard, isEndGame, isThereWinner } from '../utils/boardLogic';

export const ContextState = createContext();

function ProviderState({ children }) {
  const [board, setBoard] = useState(createBoard(3));
  const [turn, setTurn] = useState(TURNS.o);
  const [endMsg, setEndMsg] = useState(null);

  const resetGame = () => {
    setEndMsg(null);
    setTurn(TURNS.o);
    setBoard(createBoard(3));
  };

  const updateBoard = (row, col) => {
    // If we have a value on the current position
    if (board[row][col]) return;

    const newBoard = board.slice();

    newBoard[row][col] = turn;
    setBoard(newBoard);

    const newTurn = TURNS.o === turn ? TURNS.x : TURNS.o;
    setTurn(newTurn);

    if (isThereWinner(board, turn)) {
      setEndMsg(`Congratulations ${turn} you win the game!`);
      confetti();
    } else if (isEndGame(board)) {
      setEndMsg('You tie the game 😔');
    }
  };

  return (
    <ContextState.Provider
      value={{ endGame: endMsg, currentPlayer: turn, boardState: board, onChange: updateBoard, resetGame: resetGame }}
    >
      {children}
    </ContextState.Provider>
  );
}

export default ProviderState;
