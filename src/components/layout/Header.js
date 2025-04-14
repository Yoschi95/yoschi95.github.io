import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import jh_logo from "../../assets/images/logo/jh_logo.svg";
import Nav from "../sections/Nav";
import LightDarkSwitch from "../shared/LightDarkSwitch";
import BurgerMenu from "../shared/BurgerMenu";

function Header() {
  // Define function to scroll to the section when clicking the logo
  const scrollToHomeSection = () => {
    window.history.pushState(null, "", "#home");
    const targetElement = document.getElementById("home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get screen size and set isMobile state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <button onClick={scrollToHomeSection} className="logo-button first-component">
        <img src={jh_logo} alt="Joscha Hartmann brand logo" className="header-logo" />
      </button>
      {isMobile ? <BurgerMenu className="second-component" /> : <Nav className="second-component" />}
      <div className="third-component">
        <LightDarkSwitch theme={theme} onClick={toggleTheme} />
      </div>
    </header>
  );
}

export default Header;
