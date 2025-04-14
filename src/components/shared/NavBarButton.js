import "./NavBarButton.scss";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { setBodyVerticalScrollable } from "../../utils/utils";

function NavBarButton({ text, sectionId }) {
  const scrollToSection = () => {
    window.history.pushState(null, "", `#${sectionId}`);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Cannot find targetElement: ${sectionId}`);
    }
  };

  const { setIsSideBarOpen } = useContext(SidebarContext);

  const buttonEventHandler = () => {
    setIsSideBarOpen(false);
    setBodyVerticalScrollable(true);
    scrollToSection();
  };

  return (
    <button className="navBarButton" onClick={buttonEventHandler}>
      {text}
    </button>
  );
}

export default NavBarButton;
