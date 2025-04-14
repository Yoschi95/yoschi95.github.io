import "./Footer.scss";
import jh_logo from "../../assets/images/logo/jh_logo.svg";
import ArrowUp from "../shared/ArrowUp.js";

const Footer = () => {
  const scrollToHomeSection = () => {
    window.history.pushState(null, "", "#home");
    const targetElement = document.getElementById("home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <button onClick={scrollToHomeSection} className="img-button">
        <img src={jh_logo} alt="Joscha Hartmann brand logo" className="footer-logo" />
      </button>
      <p>
        Developed and designed with <span className="heart-symbol">&#10084;</span> by Joscha Hartmann
      </p>
      <button onClick={scrollToHomeSection} className="arrow-button">
        <ArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
