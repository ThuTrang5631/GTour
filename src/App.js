import Header from "./components/Header";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";
import tokyoImage from "./assets/Tokyo.jpg";
import seoulImage from "./assets/Seoul.jpg";
import parisImage from "./assets/Paris.jpg";
import londonImage from "./assets/London.jpg";

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

function App() {
  return (
    <>
      <Header></Header>
      <section className="populardestinations padding-inwrap">
        <h2 className="populardestinations__title titleh2">
          Popular Destinations
        </h2>
        <p className="populardestinations__desc subtitle">
          World's best tourist destinations
        </p>
        <div className="populardestinations__wrapcard">
          {listDestinations.map((item) => {
            return (
              <DestinationCard
                href={item.href}
                content={item.title}
                backgroundImage={item.backgroundImage}
              ></DestinationCard>
            );
          })}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
