import "./ExitCross.scss";

function ExitCross({ invertedDarkMode }) {
  return (
    <div>
      <span className={`cross-line cross-line-1 ${invertedDarkMode ? "invertedDarkMode" : ""}`}></span>
      <span className={`cross-line cross-line-2 ${invertedDarkMode ? "invertedDarkMode" : ""}`}></span>
    </div>
  );
}

export default ExitCross;
