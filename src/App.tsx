import Board from './components/Board/Board';
import Alert from './components/Alert/Alert';

import './App.css';
import { useContext } from 'react';
import { ContextState } from './context/ProviderState';

function App() {
  // Did the game finished?
  // Anyone won?
  // Is it tied?
  // How to restart game
  // Whose turn is it?
  // How to open/close Alert

  const { currentPlayer, endGame, resetGame } = useContext(ContextState);

  return (
    <div className="App">
      <h1 className="title">Hello 👋 Softtek!</h1>
      <p className="turn">Player {currentPlayer} turn</p>

      <Board />
      {endGame && <Alert message={endGame} handleClose={resetGame} />}
    </div>
  );
}

export default App;
