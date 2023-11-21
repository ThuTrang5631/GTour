import Header from "./components/Header";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";
import tokyoImage from "./assets/Tokyo.jpg";
import seoulImage from "./assets/Seoul.jpg";
import parisImage from "./assets/Paris.jpg";
import londonImage from "./assets/London.jpg";
import TripCard from "./components/TripCard";
import frenchImage from "./assets/french.jpeg";
import switzerlandImage from "./assets/Grand Switzerland.jpeg";
import japanImage from "./assets/Japan.jpeg";

const listDestinations = [
  {
    href: "https://themes.themegoods.com/grandtour/demo/destination/tokyo/",
    title: "Tokyo",
    backgroundImage: tokyoImage,
  },
  {
    href: "https://themes.themegoods.com/grandtour/demo/destination/seoul/",
    title: "Seoul",
    backgroundImage: seoulImage,
  },
  {
    href: "https://themes.themegoods.com/grandtour/demo/destination/paris/",
    title: "Paris",
    backgroundImage: parisImage,
  },
  {
    href: "https://themes.themegoods.com/grandtour/demo/destination/london/",
    title: "London",
    backgroundImage: londonImage,
  },
];

const listsValueTrip = [
  {
    src: frenchImage,
    price: "$5,000",
    title: "French Autumn",
    desc: "City Tours, Urban",
    isDiscount: false,
    href: "https://themes.themegoods.com/grandtour/demo/tour/french-autumn/",
    countReviews: "4 Reviews",
    days: "5",
    isStarBg: true,
    starsBg: 4,
  },
  {
    src: switzerlandImage,
    price: "$6,000",
    title: "Grand Switzerland",
    desc: "Shopping, Mountain, Snow & Ice",
    isDiscount: false,
    href: "https://themes.themegoods.com/grandtour/demo/tour/french-autumn/",
    countReviews: "4 Reviews",
    days: "6",
    isStarBg: true,
    starsBg: 4,
  },
  {
    src: japanImage,
    discountBeforePrice: "$3,000",
    price: "$2,500",
    title: "Discover Japan",
    desc: "City Tours, Iconic",
    isDiscount: true,
    href: "https://themes.themegoods.com/grandtour/demo/tour/french-autumn/",
    countReviews: "4 Reviews",
    days: "5",
    isStarBg: true,
    starsBg: 4,
  },
];

function App() {
  return (
    <div className="app">
      <Header></Header>
      <section className="populardestinations padding-inwrap mb-50">
        <h2 className="populardestinations__content titleh2">
          Popular Destinations
        </h2>
        <p className="populardestinations__content subtitle mb-50">
          World's best tourist destinations
        </p>
        <div className="populardestinations__wrapcard">
          {listDestinations.map((item, index) => {
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
          {listsValueTrip.map((item, index) => {
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

      <Footer></Footer>
    </div>
  );
}

export default App;
