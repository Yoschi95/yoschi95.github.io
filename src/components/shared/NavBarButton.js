import "./NavBarButton.scss";

function NavBarButton({ text, sectionId }) {
  const scrollToSection = () => {
    window.history.pushState(null, "", sectionId);
    targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Cannot find targetElement: ${sectionId}`);
    }
  };

  return (
    <button className="navBarButton" onClick={scrollToSection}>
      {text}
    </button>
  );
}

export default NavBarButton;
