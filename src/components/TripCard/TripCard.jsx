const TripCard = ({
  isDiscount,
  src,
  price,
  discountBeforePrice,
  title,
  desc,
  countReviews,
  days,
  starsBg,
  href,
  isModal,
  className,
}) => {
  const displayStar = (starsBg) => {
    let list = [];

    for (let i = 1; i <= 5; i++) {
      if (i > starsBg) {
        list.push(
          <li className="tripcard__star" key={i}>
            <i className="fa-regular fa-star star__notbg"></i>
          </li>
        );
      } else {
        list.push(
          <li className="tripcard__star" key={i}>
            <i className="fa-solid fa-star star__bg"></i>
          </li>
        );
      }
    }

    return list;
  };

  return (
    <a
      className={`tripcard hover-card ${className ? className : ""}`}
      href={href}
    >
      <div className="tripcard__top" style={isModal && { marginBottom: "0" }}>
        <img
          className={`tripcard__image ${isModal ? "modal__image" : ""}`}
          src={src}
          alt="trip"
        ></img>
        <div
          className={`tripcard__price ${
            isModal ? "modal__price" : "card__price"
          }`}
        >
          {discountBeforePrice && (
            <span className="tripcard__discountprice">
              {discountBeforePrice}
            </span>
          )}
          {price}
        </div>
        {isDiscount && <span className="tripcard__sale">Sale</span>}
      </div>
      <div
        className="tripcard__bottom"
        style={isModal && { position: "absolute", bottom: "-5px" }}
      >
        <h4
          className={"tripcard__bottomtitle"}
          style={isModal && { color: "#ffffff" }}
        >
          {title}
        </h4>
        {desc && <p className="tripcard__tours">{desc}</p>}
        <div className="tripcard__bottomreview">
          <ul className="tripcard__wrapstars">
            {displayStar(starsBg)}
            {countReviews && (
              <li className="tripcards__countreview">{countReviews}</li>
            )}
          </ul>
          {days && (
            <div className="tripcards__days">
              <span>
                <i className="fa-regular fa-clock"></i>
              </span>
              <p className="tripcards__daysdesc">{days} days</p>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default TripCard;
