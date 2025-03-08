import "./StandardButton.scss";

function StandardButton({ text, handleClick, type }) {
  return (
    <button className="standardButton" onClick={handleClick} type={type}>
      {text}
    </button>
  );
}

export default StandardButton;
