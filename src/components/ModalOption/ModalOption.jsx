import { useState } from "react";
import { LISTCOLORMODALOPTION, LISTCARD } from "../../utils/constants";

const HoverCard = ({ title, href }) => {
  return (
    <div className="hovercard">
      <div className="hovercard__wrap">
        <h6 className="hovercard__title">{title}</h6>
        <a
          className="hovercard__btn"
          target="_blank"
          href={href}
          rel="noreferrer"
        >
          Launch
        </a>
      </div>
    </div>
  );
};

const ModalOption = () => {
  const [cardsData, setCardsData] = useState(LISTCARD);

  const handleCardHover = (id, isHover) => {
    const updateCards = cardsData.map((card) =>
      card.id === id ? { ...card, isHover } : card
    );

    console.log("cardsdata", updateCards);

    setCardsData(updateCards);
  };

  return (
    <div className="modaloption">
      <div className="modaloption__top">
        <h6 className="modaloption__title">Created With Grand Tour</h6>
        <p className="modaloption__desc">
          We designed Grand Tour theme to make it works especially for tour &
          travel site. Here are a few included examples that you can import with
          one click.
        </p>
      </div>
      <ul className="modaloption__list">
        {cardsData.slice(0, 2).map((item, index) => {
          return (
            <li
              key={index}
              className="modaloption__item"
              onMouseOver={() => handleCardHover(item.id, true)}
              onMouseLeave={() => handleCardHover(item.id, false)}
            >
              <img src={item.src} alt="demo" />
              {item.isHover && (
                <HoverCard href={item.href} title={item.title} />
              )}
            </li>
          );
        })}
      </ul>
      <div className="modaloption__listcolor">
        <h6 className="modaloption__title">Predefined Colors</h6>
        <ul className="modaloption__list modaloption__listcolor">
          {LISTCOLORMODALOPTION.map((item, index) => {
            return (
              <li key={index}>
                <a
                  style={{ backgroundColor: item.color }}
                  className="modaloption__coloritem"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="modaloption__liststyling">
        <h6 className="modaloption__title">Predefined Stylings</h6>
        <ul className="modaloption__list modaloption__liststyle">
          {cardsData.slice(2, 11).map((item, index) => {
            return (
              <li
                key={index}
                className="modaloption__item modaloption__liststyleitem"
                onMouseOver={() => handleCardHover(item.id, true)}
                onMouseLeave={() => handleCardHover(item.id, false)}
              >
                <img src={item.src} alt="demo" />
                {item.isHover && (
                  <HoverCard href={item.href} title={item.title} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ModalOption;
