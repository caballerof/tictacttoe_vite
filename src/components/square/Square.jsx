import './Square.css';

function Square({ value, handleClick, index }) {
  return (
    <div className="tile" onClick={() => handleClick(index)}>
      {value}
    </div>
  );
}

export default Square;
