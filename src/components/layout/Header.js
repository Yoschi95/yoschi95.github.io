import "./Header.scss";
import jh_logo from "../../assets/images/logo/jh_logo.svg";
import Nav from "../sections/Nav";

import LightDarkSwitch from "../shared/LightDarkSwitch";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  // Define function to scroll to the section when clicking the logo
  const scrollToHomeSection = () => {
    window.history.pushState(null, "", "#home");
    const targetElement = document.getElementById("home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <button onClick={scrollToHomeSection} className="logo-button first-component">
        <img src={jh_logo} alt="Joscha Hartmann brand logo" className="header-logo" />
      </button>
      <Nav className="second-component" />
      <LightDarkSwitch theme={theme} onClick={toggleTheme} className="third-component" />
    </header>
  );
}

export default Header;
