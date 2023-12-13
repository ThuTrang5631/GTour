import logoLight from "../../assets/logo__light.png";
import logoDark from "../../assets/logo__dark.png";
import Dropdown from "react-multilevel-dropdown";
import { useEffect, useState } from "react";
import { DATAMENU, LISTCARD } from "../../utils/constants";

const Header = ({ className, openModal }) => {
  const [classHeaderScroll, setclassHeaderScroll] = useState(false);
  const [dataMenu, setDataMenu] = useState(DATAMENU);

  const handleWhenScroll = () => {
    if (window.pageYOffset === 0) {
      setclassHeaderScroll(false);
    } else {
      setclassHeaderScroll(true);
    }
  };

  const handleHover = (id) => {
    const updateCards = dataMenu.map((item) =>
      item.id === id ? { ...item, isHover: true } : item
    );

    setDataMenu(updateCards);
  };

  console.log("dataMenu", dataMenu);

  const handleHoverLeave = () => {
    setDataMenu(DATAMENU);

    console.log("dataMenu", dataMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWhenScroll);

    return () => {
      window.removeEventListener("scroll", handleWhenScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header padding-inwrap ${
          classHeaderScroll && "headerscroll"
        } ${className}`}
      >
        <div className="header__wrapleft">
          <a
            className="header__logo"
            href="https://themes.themegoods.com/grandtour/demo/"
          >
            <img
              src={classHeaderScroll ? logoDark : logoLight}
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="header__wrapright">
          <ul className="header__menu">
            {dataMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="header__menuitem"
                  onMouseLeave={() => handleHoverLeave()}
                >
                  <a
                    href={item.href}
                    className="header__menuitemlink"
                    onMouseOver={() => handleHover(item.id)}
                    onClick={() => handleHover(item.id)}
                  >
                    {item.title}
                  </a>
                  {item.isHover && item.submenu1.length && (
                    <ul className="header__submenu">
                      {item.submenu1.map((item, index) => {
                        return (
                          <li key={index} className="header__submenuitem">
                            <a href={item.url}>{item.title}</a>
                            {item.submenu2 && (
                              <i className="fa-solid fa-angle-right"></i>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
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
