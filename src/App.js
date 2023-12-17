import Header from "./components/Header";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";
import TripCard from "./components/TripCard";
import ReasonCard from "./components/ReasonCard";
import PostCard from "./components/PostCard";
import Input from "./components/Input";
import {
  LISTMONTHS,
  ALLCATEGORIES,
  SORTBYDATE,
  ANYDESTINATIONS,
  LISTARTICLE,
  LISTDESTINATIONS,
  LISTREASONCARD,
  LISTVALUETRIPS,
} from "./utils/constants";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import OptionBtn from "./components/OptionBtn";
import ModalOption from "./components/ModalOption/ModalOption";

const ButtonScroll = ({ onClick }) => {
  return (
    <button className="buttonscroll hover-card" onClick={onClick}>
      <i className="fa-solid fa-angle-up"></i>
    </button>
  );
};

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalOption, setOpenModalOption] = useState(false);
  const [openButtonScroll, setOpenButtonScroll] = useState(false);

  const handleOpenSearch = (e) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };

  const handleButtonScroll = () => {
    if (window.pageYOffset === 0) {
      setOpenButtonScroll(false);
    } else {
      setOpenButtonScroll(true);
    }
  };

  const handleClickButtonScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleButtonScroll);

    return () => {
      window.removeEventListener("scroll", handleButtonScroll);
    };
  }, []);

  return (
    <div className="app">
      <section className="hero mb-50">
        <iframe
          className="hero__bg"
          src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&controls=0&loop=1&mute=1&autohide=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <Header
          className="hero__header"
          openModal={() => setOpenModal(true)}
        ></Header>
        <div className="hero__content padding-inwrap">
          <h1 className="hero__title">Where do you want to go?</h1>
          <p className="hero__desc">
            Trips, experiences, and places. All in one service.
          </p>
          <form className="hero__form">
            <div className="hero__formcontent hero__formtop">
              <Input
                classNameWrap="hero__input"
                placeholder="Destination, city"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Input>
              <select className="hero__input hero__select hero__month">
                {LISTMONTHS.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
              <select className="hero__input hero__select hero__sortbydate">
                {SORTBYDATE.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
              <button className="hero__input hero__btn">Search</button>
            </div>
            {openSearch && (
              <div className="hero__formcontent hero__formbottom">
                <select className="hero__input hero__select hero__icon">
                  {ALLCATEGORIES.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </select>
                <select className="hero__input hero__select hero__icon">
                  {ANYDESTINATIONS.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </select>
                <Input
                  classNameWrap="hero__input"
                  placeholder="Max budget ex 500"
                >
                  <i className="fa-solid fa-dollar-sign"></i>
                </Input>
              </div>
            )}

            <button
              onClick={(e) => handleOpenSearch(e)}
              className="hero__advancedsearch"
            >
              {!openSearch ? (
                <i className="fa-solid fa-chevron-down"></i>
              ) : (
                <i className="fa-solid fa-chevron-up"></i>
              )}
              Advanced Search
            </button>
          </form>
        </div>
      </section>
      <section className="populardestinations padding-inwrap mb-50">
        <h2 className="populardestinations__content titleh2">
          Popular Destinations
        </h2>
        <p className="populardestinations__content subtitle mb-50">
          World's best tourist destinations
        </p>
        <div className="populardestinations__wrapcard">
          {LISTDESTINATIONS.map((item, index) => {
            return (
              <DestinationCard
                key={index}
                href={item.href}
                content={item.title}
                backgroundImage={item.backgroundImage}
              ></DestinationCard>
            );
          })}
        </div>
      </section>
      <section className="valuetrips padding-inwrap mb-50">
        <h2 className="valuetrips__content titleh2">Best Value Trips</h2>
        <p className="valuetrips__content subtitle mb-50">
          Best offers trips from us
        </p>
        <div className="valuetrips__wrapcard">
          {LISTVALUETRIPS.map((item, index) => {
            return (
              <TripCard
                key={index}
                isDiscount={item.isDiscount}
                src={item.src}
                href={item.href}
                price={item.price}
                title={item.title}
                desc={item.desc}
                days={item.days}
                countReviews={item.countReviews}
                isStarBg={true}
                starsBg={item.starsBg}
                discountBeforePrice={item.discountBeforePrice}
              ></TripCard>
            );
          })}
        </div>
      </section>
      <section className="whychooseus padding-inwrap mb-50">
        <h2 className="whychooseus__content titleh2">Why Choose Us</h2>
        <p className="whychooseus__content subtitle mb-50">
          Here are reasons you should plan trip with us
        </p>
        {
          <div className="whychooseus__wrapcard">
            {LISTREASONCARD.map((item, index) => {
              return (
                <ReasonCard
                  key={index}
                  title={item.title}
                  src={item.src}
                  desc={item.desc}
                ></ReasonCard>
              );
            })}
          </div>
        }
      </section>
      <section className="bgsection mb-50"></section>
      <section className="articles padding-inwrap mb-50">
        <h2 className="articles__content titleh2">Articles & Tips</h2>
        <p className="articles__content subtitle mb-50">
          Explore some of the best tips from around the world
        </p>
        <div className="articles__wrapcard">
          {LISTARTICLE.map((item, index) => {
            return (
              <PostCard
                key={index}
                src={item.src}
                title={item.title}
                desc={item.desc}
                dates={item.dates}
                href={item.href}
              ></PostCard>
            );
          })}
        </div>
      </section>

      <Footer></Footer>
      <Modal isOpenModal={openModal} onCloseModal={() => setOpenModal(false)} />
      <section className="modal__optionsection">
        <OptionBtn
          onClick={() => setOpenModalOption(!openModalOption)}
          style={{ right: openModalOption ? "370px" : "0px" }}
        ></OptionBtn>
        {openModalOption && <ModalOption></ModalOption>}
      </section>
      {openButtonScroll && (
        <ButtonScroll onClick={handleClickButtonScroll}></ButtonScroll>
      )}
    </div>
  );
}

export default App;
