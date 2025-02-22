import jh_logo from "../../assets/images/logo/jh_logo.svg";
import Nav from "./Nav";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a href="#home">
        <img src={jh_logo} alt="Joscha Hartmann brand logo" class="header-logo" />
      </a>

      <Nav />
    </header>
  );
}

export default Header;
