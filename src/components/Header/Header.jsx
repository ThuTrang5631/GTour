import logoLight from "../../assets/logo__light.png";
import Dropdown from "react-multilevel-dropdown";

const Header = ({ className, openModal }) => {
  return (
    <>
      <header className={`header padding-inwrap ${className}`}>
        <div className="header__wrapleft">
          <a
            className="header__logo"
            href="https://themes.themegoods.com/grandtour/demo/"
          >
            <img src={logoLight} alt="logo"></img>
          </a>
        </div>
        <div className="header__wrapright">
          <ul className="header__menu">
            <li className="header__menuitem">
              <a
                className="header__menuitemlink"
                href="https://themes.themegoods.com/grandtour/demo/"
              >
                Home
              </a>
              <ul className="header__submenu">
                <li className="header__submenuitem">
                  <a href="https://themes.themegoods.com/grandtour/demo/">
                    Home 1 - Background Image
                  </a>
                </li>
                <li className="header__submenuitem">
                  <a href="https://themes.themegoods.com/grandtour/demo/">
                    Home 1 - Background Image
                  </a>
                </li>
              </ul>
            </li>
            <li className="header__menuitem">
              <a href="#" className="header__menuitemlink">
                Tours
              </a>
              <ul className="header__submenu"></ul>
            </li>
            <li className="header__menuitem">
              <a
                className="header__menuitemlink"
                href="https://themes.themegoods.com/grandtour/demo/tour/the-new-california/"
              >
                Booking
              </a>
              <ul className="header__submenu"></ul>
            </li>
            <li className="header__menuitem">
              <a className="header__menuitemlink" href="#">
                Destinations
              </a>
              <ul className="header__submenu"></ul>
            </li>
            <li className="header__menuitem">
              <a className="header__menuitemlink" href="#">
                Pages
              </a>
              <ul className="header__submenu"></ul>
            </li>
            <li className="header__menuitem">
              <a className="header__menuitemlink" href="#">
                Blog
              </a>
              <ul className="header__submenu"></ul>
            </li>
            <li className="header__menuitem">
              <a className="header__menuitemlink" href="#">
                Shortcodes
              </a>
              <ul className="header__submenu"></ul>
            </li>
            <li className="header__menuitem">
              <a
                className="header__menuitemlink"
                href="https://themes.themegoods.com/grandtour/demo/shop/"
              >
                Shop
              </a>
              <ul className="header__submenu"></ul>
            </li>
          </ul>
          <div className="header__button">
            <button className="header__btn" onClick={openModal}>
              <span>
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <a
              className="header__btn header__btn--shoppingcart"
              href="https://themes.themegoods.com/grandtour/demo/cart/"
            >
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className="header__cartcount">0</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
