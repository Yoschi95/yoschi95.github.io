import "./Header.scss";
import jh_logo from "../../assets/images/logo/jh_logo.svg";
import Nav from "../sections/Nav";

function Header() {
  // Define function to scroll to the section when clicking the logo
  const scrollToHomeSection = () => {
    window.history.pushState(null, "", "home");
    const targetElement = document.getElementById("home");
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
