import logoLight from "../../assets/logo__light.png";
import logoDark from "../../assets/logo__dark.png";
import { useEffect, useState } from "react";
import { DATAMENU } from "../../utils/constants";

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

  const handleHoverSubmenu1 = (id, isHover) => {
    const updateCards = dataMenu.map((item) => {
      if (item.submenu1) {
        // map every item in submenu1 and if id suitable => connect and change isHover is true
        const updateSubmenu1 = item.submenu1.map((itemSub) =>
          itemSub.id === id ? { ...itemSub, isHover: isHover } : itemSub
        );

        // map every item and connect them and change property new submenu1

        return {
          ...item,
          submenu1: updateSubmenu1,
        };
      }
    });

    setDataMenu(updateCards);
  };

  const handleHoverLeave = () => {
    setDataMenu(DATAMENU);
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
                          <li
                            key={index}
                            className="header__submenuitem"
                            onMouseLeave={() =>
                              handleHoverSubmenu1(item.id, false)
                            }
                            style={item.submenu2 && { position: "relative" }}
                          >
                            <a
                              onMouseOver={() =>
                                handleHoverSubmenu1(item.id, true)
                              }
                              href={item.url}
                            >
                              {item.title}
                            </a>
                            {item.submenu2 && (
                              <i className="fa-solid fa-angle-right"></i>
                            )}
                            {item.isHover && item.submenu2 && (
                              <ul
                                className="header__submenu"
                                style={{
                                  marginTop: "0px",
                                  right: "-262px",
                                  top: "0",
                                }}
                              >
                                {item.submenu2.map((item, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="header__submenuitem"
                                    >
                                      <a href={item.url}>{item.title}</a>
                                    </li>
                                  );
                                })}
                              </ul>
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
