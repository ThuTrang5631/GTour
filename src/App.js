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
import ReasonCard from "./components/ReasonCard";
import reasonImage1 from "./assets/handpickhotel.png";
import reasonImage2 from "./assets/service.png";
import reasonImage3 from "./assets/pricegraduatee.png";
import PostCard from "./components/PostCard";
import postCardImage1 from "./assets/postcardimage1.jpg";
import postCardImage2 from "./assets/postcardimage2.jpeg";
import postCardImage3 from "./assets/postcardimage3.jpg";

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

const listReasonCard = [
  {
    src: reasonImage1,
    title: "Handpicked Hotels",
    desc: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    src: reasonImage2,
    title: "World Class Service",
    desc: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    src: reasonImage3,
    title: "Best Price Guarantee",
    desc: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

const listArticle = [
  {
    src: postCardImage1,
    href: "https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/",
    title: "Memorial Day to Someone Told Me to Travel",
    desc: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    dates: "December 10, 2016",
  },
  {
    src: postCardImage2,
    href: "https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/",
    title: "7 Tips For Nomads On A Budget Trips",
    desc: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    dates: "December 10, 2016",
  },
  {
    src: postCardImage3,
    href: "https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/",
    title: "Taking A Travel Blog Victory Lap",
    desc: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    dates: "December 10, 2016",
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
      <section className="whychooseus padding-inwrap mb-50">
        <h2 className="whychooseus__content titleh2">Why Choose Us</h2>
        <p className="whychooseus__content subtitle mb-50">
          Here are reasons you should plan trip with us
        </p>
        {
          <div className="whychooseus__wrapcard">
            {listReasonCard.map((item, index) => {
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
          {listArticle.map((item, index) => {
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
    </div>
  );
}

export default App;
