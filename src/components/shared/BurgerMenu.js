import "./BurgerMenu.scss";
import BurgerIcon from "./BurgerIcon";

function BurgerMenu({ className }) {
  return (
    <div className={`${className} burger-menu`}>
      <button className="burger-button">
        <BurgerIcon />
      </button>
    </div>
  );
}

export default BurgerMenu;
