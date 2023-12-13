import TripCard from "../TripCard";
import { TRIPCARDLISTMODAL, DATAMENU } from "../../utils/constants";
import { useState } from "react";

const Modal = ({ isOpenModal, onCloseModal }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [menuClick, setMenuClick] = useState(NaN);

  const handleMenuClick = (item) => {
    setOpenSubmenu(true);
    setMenuClick(item);
  };

  return (
    <>
      {isOpenModal && (
        <div className="modal__wrap">
          <div className="modal">
            <div className="modal__btn">
              <button className="modal__btnclose" onClick={onCloseModal}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <div className="modal__content">
              {!openSubmenu ? (
                <ul className="modal__menu">
                  {DATAMENU.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="modal__menuitem"
                        onClick={() => handleMenuClick(item.id)}
                      >
                        <a href="#" className="modal__desc">
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="modal__menu">
                  <button
                    className="modal__back"
                    onClick={() => setOpenSubmenu(false)}
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                    Back
                  </button>
                  {DATAMENU[menuClick].submenu1.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="modal__menuitem"
                        onClick={() => handleMenuClick(item.id)}
                      >
                        <a href="#" className="modal__desc modal__submenu1 ">
                          {item.title}
                        </a>
                        {item.submenu2 && (
                          <ul className="modal__submenu modal__menu">
                            {item.submenu2.map((subitem2, index) => {
                              return (
                                <li className="modal__menuitem modal__desc">
                                  <a href={subitem2.url} key={index}>
                                    {subitem2.title}
                                  </a>
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
            </div>

            <div className="modal__card">
              {TRIPCARDLISTMODAL.map((item, index) => {
                return (
                  <TripCard
                    key={index}
                    className="modal__tripcard"
                    href={item.href}
                    src={item.src}
                    price={item.price}
                    isDiscount={item.isDiscount}
                    isStarBg={item.isStarBg}
                    starsBg={item.starsBg}
                    title={item.title}
                    isModal={item.isModal}
                    discountBeforePrice={item.discountBeforePrice}
                  ></TripCard>
                );
              })}
            </div>
            <ul className="modal__social">
              <li className="modal__socialitem">
                <a target="_blank" href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li className="modal__socialitem">
                <a target="_blank" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="modal__socialitem">
                <a target="_blank" href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className="modal__socialitem">
                <a target="_blank" href="#">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li className="modal__socialitem">
                <a target="_blank" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
