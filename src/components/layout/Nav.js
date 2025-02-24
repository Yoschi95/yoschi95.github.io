import "./Nav.scss";

function Nav() {
  //TODO: Replace anchor tags to enable smooth scrolling to sections

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
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
