import "./BurgerMenu.scss";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import ExitCross from "../shared/ExitCross";
import Nav from "../sections/Nav";

function BurgerMenu({ className }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className={`${className} burger-menu`}>
      {isSideBarOpen ? (
        <div className="burger-sidebar">
          <button className="exit-cross-button" onClick={() => setSideBarOpen(false)}>
            <ExitCross />
          </button>
          <div className="burger-navbar">
            <Nav />
          </div>
        </div>
      ) : (
        <button className="burger-button" onClick={() => setSideBarOpen(true)}>
          <BurgerIcon />
        </button>
      )}
    </div>
  );
}

export default BurgerMenu;
