import jh_logo from "../../assets/images/logo/jh_logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <img src={jh_logo} alt="Joscha Hartmann brand logo" />
      <Nav />
    </header>
  );
}

export default Header;
