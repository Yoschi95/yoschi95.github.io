import "./BurgerMenu.scss";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import ExitCross from "../shared/ExitCross";
import Nav from "../sections/Nav";

function BurgerMenu({ className }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const setBodyVerticalScrollable = (isScrollable = true) => {
    document.body.style.overflowY = isScrollable ? "auto" : "hidden";
  };

  const HandleExitCrossClick = () => {
    setSideBarOpen(false);
    setBodyVerticalScrollable(true);
  };

  const HandleBurgerButtonClick = () => {
    setSideBarOpen(true);
    setBodyVerticalScrollable(false);
  };

  return (
    <div className={`${className} burger-menu`}>
      {isSideBarOpen ? (
        <div className="burger-sidebar">
          <button className="exit-cross-button" onClick={HandleExitCrossClick}>
            <ExitCross />
          </button>
          <div className="burger-navbar">
            <Nav />
          </div>
        </div>
      ) : (
        <button className="burger-button" onClick={HandleBurgerButtonClick}>
          <BurgerIcon />
        </button>
      )}
    </div>
  );
}

export default BurgerMenu;
