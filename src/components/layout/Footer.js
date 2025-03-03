import "./Footer.scss";
import jh_logo from "../../assets/images/logo/jh_logo.svg";
import ArrowUp from "../shared/ArrowUp.js";

function Footer() {
  const scrollToHomeSection = () => {
    window.history.pushState(null, "", "home");
    targetElement = document.getElementById("home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <button onClick={scrollToHomeSection}>
        <img src={jh_logo} alt="Joscha Hartmann brand logo" className="footer-logo" />
      </button>
      <p>
        Developed and designed with <span className="heart-symbol">&#10084;</span> by Joscha Hartmann
      </p>
      <ArrowUp />
    </footer>
  );
}

export default Footer;
