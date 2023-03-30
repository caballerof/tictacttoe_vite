import { useContext } from 'react';
import { ContextState } from '../../context/ProviderState';
import Square from '../square/Square';
import './Board.css';

function Board() {
  // What is the state of the board?
  // Whose turn is it?
  // How to update board state with player move?
  const { boardState, onChange } = useContext(ContextState);

  const handleClick = (value) => {
    //Add logic to change state
    const [row, col] = value.split('-');
    onChange(row, col);
  };

  return (
    <section className="container">
      {boardState.map((row, indexRow) => {
        return row.map((element, index) => {
          return (
            <Square
              key={`${indexRow}-${index}`}
              value={element}
              handleClick={handleClick}
              index={`${indexRow}-${index}`}
            />
          );
        });
      })}
    </section>
  );
}

export default Board;
