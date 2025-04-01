import "./Nav.scss";
import NavBarButton from "../shared/NavBarButton";
import Resume from "./Resume";
import LightDarkSwitch from "../shared/LightDarkSwitch";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavBarButton text="Home" sectionId="home" />
        </li>
        <li>
          <NavBarButton text="About" sectionId="about" />
        </li>
        <li>
          <NavBarButton text="Experience" sectionId="experience" />
        </li>
        <li>
          <NavBarButton text="Skills" sectionId="skills" />
        </li>
        <li>
          <NavBarButton text="Education" sectionId="education" />
        </li>
        <li>
          <NavBarButton text="Projects" sectionId="projects" />
        </li>
        <li>
          <NavBarButton text="Contact" sectionId="contact" />
        </li>
        <li>
          <Resume />
        </li>
        <li>
          <LightDarkSwitch theme={theme} onClick={toggleTheme} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
