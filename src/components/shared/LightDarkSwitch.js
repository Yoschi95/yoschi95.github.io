import "./LightDarkSwitch.scss";

function LightDarkSwitch({ isDarkMode, onClick }) {
  return (
    <button onClick={onClick} className={`isDarkMode${isDarkMode ? " night" : ""}`}>
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </button>
  );
}

export default LightDarkSwitch;
