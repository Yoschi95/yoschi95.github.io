import jh_logo from "../../assets/images/logo/jh_logo.svg";
import Nav from "./Nav";
import "./Header.scss";

function Header() {
  // Define function to scroll to the section when clicking the logo
  const scrollToHomeSection = () => {
    window.history.pushState(null, "", "home");
    targetElement = document.getElementById("home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <button onClick={scrollToHomeSection}>
        <img src={jh_logo} alt="Joscha Hartmann brand logo" className="header-logo" />
      </button>

      <Nav />
    </header>
  );
}

export default Header;
