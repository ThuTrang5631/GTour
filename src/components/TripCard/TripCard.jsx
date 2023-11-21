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
}) => {
  const displayStar = (starsBg) => {
    let list = [];

    for (let i = 1; i <= 5; i++) {
      if (i > starsBg) {
        list.push(
          <li className="tripcard__star" key={i}>
            <i className="fa-regular fa-star"></i>
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
    <a className="tripcard" href={href}>
      <div className="tripcard__top">
        <img className="tripcard__image" src={src} alt="trip"></img>
        <div className="tripcard__price">
          {isDiscount && (
            <span className="tripcard__discountprice">
              {discountBeforePrice}
            </span>
          )}
          {price}
        </div>
        {isDiscount && <span className="tripcard__sale">Sale</span>}
      </div>
      <div className="tripcard__bottom">
        <h4 className="tripcard__bottomtitle">{title}</h4>
        <p className="tripcard__tours">{desc}</p>
        <div className="tripcard__bottomreview">
          <ul className="tripcard__wrapstars">
            {displayStar(starsBg)}
            <li className="tripcards__countreview">{countReviews}</li>
          </ul>
          <div className="tripcards__days">
            <span>
              <i className="fa-regular fa-clock"></i>
            </span>
            <p className="tripcards__daysdesc">{days} days</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TripCard;
