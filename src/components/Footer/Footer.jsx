import awardsImage from "../../assets/awards.png";
import buddhaImage from "../../assets/Buddha Sunrise in Borobudur.jpg";
import aerialImage from "../../assets/Aerial View of Singapore CBD Skyline.jpg";
import gentooPenguinsImage from "../../assets/Gentoo Penguins, Falkland Islands.jpg";
import viewOfSugarloafImage from "../../assets/View Of Sugarloaf Mountain.jpg";
import gateImage from "../../assets/The Great Gate.jpg";
import sacreCoeurImage from "../../assets/Sacre Coeur.jpg";

const listImage = [
  {
    src: buddhaImage,
    alt: "Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia",
    href: "https://www.flickr.com/photos/artiephotography/28760131762/",
  },
  {
    src: gentooPenguinsImage,
    alt: "Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory",
    href: "https://www.flickr.com/photos/artiephotography/27308262031/",
  },
  {
    src: aerialImage,
    alt: "Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore",
    href: "https://www.flickr.com/photos/artiephotography/27287965356/",
  },
  {
    src: viewOfSugarloafImage,
    alt: "View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America",
    href: "https://www.flickr.com/photos/artiephotography/27138570412/",
  },
  {
    src: sacreCoeurImage,
    alt: "Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR",
    href: "https://www.flickr.com/photos/artiephotography/26520497604/",
  },
  {
    src: gateImage,
    alt: "The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR",
    href: "https://www.flickr.com/photos/artiephotography/27012097142/",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__top padding-inwrap">
        <li className="footer__topitem">
          <h2 className="footer__topitemtitle">Our Awards</h2>
          <p className="footer__topitemdesc">
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
          <img
            className="footer__topawards"
            src={awardsImage}
            alt="awards"
          ></img>
        </li>
        <li className="footer__topitem">
          <h2 className="footer__topitemtitle">Contact Info</h2>
          <ul className="footer__topwrapcontact">
            <li className="footer__contactitem">
              <span className="footer__contacticon">
                <i className="fa-solid fa-mobile"></i>
              </span>
              <span className="footer__topitemdesc">1-567-124-44227</span>
            </li>
            <li className="footer__contactitem">
              <span className="footer__contacticon">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span className="footer__topitemdesc">
                184 Main Street East Perl Habour 8007
              </span>
            </li>
            <li className="footer__contactitem">
              <span className="footer__contacticon">
                <i className="fa-solid fa-clock"></i>
              </span>
              <span className="footer__topitemdesc">
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </span>
            </li>
          </ul>
          <ul className="footer__topwrapsocial">
            <li className="footer__socialitem">
              <a
                className="footer__facebook"
                target="_blank"
                href="#"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className="footer__socialitem">
              <a
                className="footer__twitter"
                target="_blank"
                href="#"
                title="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="footer__socialitem">
              <a
                className="footer__youtube"
                target="_blank"
                href="#"
                title="Youtube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className="footer__socialitem">
              <a
                className="footer__pinterest"
                target="_blank"
                href="#"
                title="Pinterest"
              >
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </li>
            <li className="footer__socialitem">
              <a
                className="footer__instagram"
                target="_blank"
                href="#"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="footer__topitem">
          <h2 className="footer__topitemtitle">Recent Trips</h2>
          <ul className="footer__topitemimage">
            {listImage.map((item, index) => {
              return (
                <li key={index} className="footer__imageitem">
                  <a
                    target="_blank"
                    className="footer__imagelink"
                    href={item.href}
                    rel="noreferrer"
                  >
                    <img src={item.src} alt={item.alt}></img>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
      <div className="footer__bottom padding-inwrap">
        <p className="footer__copyright">
          © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
        </p>
        <ul className="footer__bottommenu">
          <li className="footer__bottommenuitem">
            <a href="https://themes.themegoods.com/grandtour/demo/">Home</a>
          </li>
          <li className="footer__bottommenuitem">
            <a href="https://themes.themegoods.com/grandtour/demo/tours/">
              Tours
            </a>
          </li>
          <li className="footer__bottommenuitem">
            <a href="https://themes.themegoods.com/grandtour/demo/blog/">
              Blog
            </a>
          </li>
          <li className="footer__bottommenuitem">
            <a href="#">Purchase Theme</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
