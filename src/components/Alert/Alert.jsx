import './Alert.css';

function Alert({ message, handleClose, msgBto = 'Play again' }) {
  return (
    <div className="alert">
      <p className="message">{message}</p>

      <button className="button" onClick={() => handleClose()}>
        {msgBto}
      </button>
    </div>
  );
}

export default Alert;
