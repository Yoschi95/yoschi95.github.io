import "./BurgerMenu.scss";
import { useState, useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { setBodyVerticalScrollable } from "../../utils/utils";
import BurgerIcon from "./BurgerIcon";
import ExitCross from "../shared/ExitCross";
import Nav from "../sections/Nav";

function BurgerMenu({ className }) {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SidebarContext);

  const HandleExitCrossClick = () => {
    setIsSideBarOpen(false);
    setBodyVerticalScrollable(true);
  };

  const HandleBurgerButtonClick = () => {
    setIsSideBarOpen(true);
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
