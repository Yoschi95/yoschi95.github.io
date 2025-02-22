import "./Nav.scss";

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#education">education</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li>
          <a href="#resume">resume </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
