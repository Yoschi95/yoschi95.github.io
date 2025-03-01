import "./StandardButton.scss";

function StandardButton({ text, handleClick }) {
  return (
    <button className="standardButton" onClick={handleClick}>
      {text}
    </button>
  );
}

export default StandardButton;
