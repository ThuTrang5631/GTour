import postCardImage1 from "../assets/postcardimage1.jpg";
import postCardImage2 from "../assets/postcardimage2.jpeg";
import postCardImage3 from "../assets/postcardimage3.jpg";
import reasonImage1 from "../assets/handpickhotel.png";
import reasonImage2 from "../assets/service.png";
import reasonImage3 from "../assets/pricegraduatee.png";
import frenchImage from "../assets/french.jpeg";
import switzerlandImage from "../assets/Grand Switzerland.jpeg";
import japanImage from "../assets/Japan.jpeg";
import tokyoImage from "../assets/Tokyo.jpg";
import seoulImage from "../assets/Seoul.jpg";
import parisImage from "../assets/Paris.jpg";
import londonImage from "../assets/London.jpg";
import modalTripCard1Image from "../assets/modaltripcard1.jpeg";
import modalTripCard2Image from "../assets/modaltripcard2.jpeg";
import modalOptionImage1 from "../assets/modaloption1.jpg";
import modalOptionImage2 from "../assets/modaloption2.jpg";
import modalOptionImage3 from "../assets/modaloption3.jpg";
import modalOptionImage4 from "../assets/modaloption4.jpg";

export const LISTMONTHS = [
  "Any Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const SORTBYDATE = [
  "Sort By Date",
  "Price Low To High",
  "Price High To Low",
  "Sort By Name",
  "Sort By Popularity",
  "Sort By Review Score",
];

export const ALLCATEGORIES = [
  "All Categories",
  "Mountain",
  "Rural",
  "Snow & Ice",
  "Wildlife",
];

export const ANYDESTINATIONS = [
  "Any Destinations",
  "Tokyo",
  "Seoul",
  "Paris",
  "London",
  "Venice",
  "Miami",
  "Rome",
  "Prague",
  "California",
  "Kyoto",
  "Hong Kong",
  "Santorini",
];

export const LISTDESTINATIONS = [
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

export const LISTVALUETRIPS = [
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

export const LISTREASONCARD = [
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

export const LISTARTICLE = [
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

export const TRIPCARDLISTMODAL = [
  {
    src: modalTripCard1Image,
    price: "$3,900",
    title: "Swiss Alps Trip",
    isDiscount: false,
    href: "https://themes.themegoods.com/grandtour/demo/tour/swiss-alps-trip/",
    isStarBg: true,
    starsBg: 4,
    isModal: true,
  },
  {
    src: modalTripCard2Image,
    discountBeforePrice: "$4,900",
    price: "$4,200",
    title: "5 Lake of Fuji San",
    isDiscount: false,
    href: "https://themes.themegoods.com/grandtour/demo/tour/5-lake-of-fuji-san/",
    isStarBg: true,
    starsBg: 4,
    isModal: true,
  },
];

export const DATAMENU = [
  {
    id: 0,
    title: "Home",
    isHover: false,
    href: "https://themes.themegoods.com/grandtour/demo/",
    submenu1: [
      {
        id: 0,
        title: "Home 1 - Background Image",
        url: "https://themes.themegoods.com/grandtour/demo/",
        submenu2: null,
      },
      {
        id: 1,
        title: "Home 2 - Youtube Video",
        url: "https://themes.themegoods.com/grandtour/demo/home-2/",
        submenu2: null,
      },
      {
        id: 2,
        title: "Home 3 - Google Inspired",
        url: "https://themes.themegoods.com/grandtour/demo/home-3-google-inspired/",
        submenu2: null,
      },
      {
        id: 3,
        title: "Home 4 - Travel Site",
        url: "https://themes.themegoods.com/grandtour/demo/home-4-travel-site/",
        submenu2: null,
      },
    ],
  },
  {
    id: 1,
    title: "Tours",
    isHover: false,
    href: "#",
    submenu1: [
      {
        id: 0,
        title: "Tour Classic Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-classic/",
        isHover: false,
        submenu2: [
          {
            title: "2 Columns",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic/",
          },
          {
            title: "3 Columns",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-classic/",
          },
          {
            title: "4 Columns",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-4-columns-classic/",
          },
        ],
      },
      {
        id: 1,
        title: "Tour Classic Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-right-sidebar/",
        isHover: false,
        submenu2: [
          {
            title: "Right Sidebar",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-right-sidebar/",
          },
          {
            title: "Left Sidebar",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-left-sidebar/",
          },
        ],
      },
      {
        id: 2,
        title: "Tour Grid Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/",
        isHover: false,
        submenu2: [
          {
            title: "2 Columns",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-grid/",
          },
          {
            title: "3 Columns",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/",
          },
          {
            title: "4 Columns",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-4-columns-grid/",
          },
        ],
      },
      {
        id: 3,
        title: "Tour Grid Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/tours/tour-grid-right-sidebar/",
        isHover: false,
        submenu2: [
          {
            title: "Right Sidebar",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-grid-right-sidebar/",
          },
          {
            title: "Left Sidebar",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-list-left-sidebar/",
          },
        ],
      },
      {
        id: 4,
        title: "Tour Header Type",
        url: "https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/",
        isHover: false,
        submenu2: [
          {
            title: "Featured Image",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/",
          },
          {
            title: "Video",
            url: "https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-video-header/",
          },
        ],
      },
      {
        id: 5,
        title: "Tour Categories",
        url: "#",
        isHover: false,
        submenu2: [
          {
            title: "Rural",
            url: "https://themes.themegoods.com/grandtour/demo/tourcat/rural/",
          },
          {
            title: "Snow & Ice",
            url: "https://themes.themegoods.com/grandtour/demo/tourcat/snow-ice/",
          },
          {
            title: "Wildlife",
            url: "https://themes.themegoods.com/grandtour/demo/tourcat/wildlife/",
          },
          {
            title: "Mountain",
            url: "https://themes.themegoods.com/grandtour/demo/tourcat/mountain/",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Booking",
    isHover: false,
    href: "https://themes.themegoods.com/grandtour/demo/tour/the-new-california/",
    submenu1: [
      {
        id: 0,
        title: "Online Payment for Booking",
        url: "#",
        isHover: false,
        submenu2: [
          {
            title: "Variable Tour Pricing",
            url: "https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/",
          },
          {
            title: "Simple Tour Pricing",
            url: "https://themes.themegoods.com/grandtour/demo/tour/swiss-alps-trip/",
          },
        ],
      },
      {
        id: 1,
        title: "Custom Booking Form",
        url: "#",
        isHover: false,
        submenu2: [
          {
            title: "Booking Form + Sub Tour Date",
            url: "https://themes.themegoods.com/grandtour/demo/tour/the-new-california/",
          },
          {
            title: "Booking Form + Custom Date",
            url: "https://themes.themegoods.com/grandtour/demo/tour/niko-trip/",
          },
        ],
      },
      {
        id: 2,
        title: "Tour Durations",
        url: "#",
        isHover: false,
        submenu2: [
          {
            title: "Single Day Tour",
            url: "https://themes.themegoods.com/grandtour/demo/tour/hong-kong/",
          },
          {
            title: "Multiple Days Tour",
            url: "https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/",
          },
        ],
      },
      {
        id: 3,
        title: "Custom Booking URL for Affiliate Tour",
        url: "https://themes.themegoods.com/grandtour/demo/tour/5-lake-of-fuji-san/",
        submenu2: null,
      },
      {
        id: 4,
        title: "Custom Booking using custom HTML & Shortcode",
        url: "https://themes.themegoods.com/grandtour/demo/tour/exclusive-prague-trip/",
        submenu2: null,
      },
      {
        id: 5,
        title: "Header Options",
        url: "#",
        isHover: false,
        submenu2: [
          {
            title: "Standard Background Header",
            url: "https://themes.themegoods.com/grandtour/demo/tour/french-autumn/",
          },
          {
            title: "Video Background Header",
            url: "https://themes.themegoods.com/grandtour/demo/tour/great-britain-travel/",
          },
        ],
      },
      {
        id: 6,
        title: "Layout Options",
        url: "#",
        isHover: false,
        submenu2: [
          {
            title: "With Sidebar",
            url: "https://themes.themegoods.com/grandtour/demo/tour/colorful-singapore/",
          },
          {
            title: "Fullwidth",
            url: "https://themes.themegoods.com/grandtour/demo/tour/discover-japan/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Destinations",
    isHover: false,
    href: "#",
    submenu1: [
      {
        id: 0,
        title: "Destination Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/destination-fullwidth/",
        submenu2: null,
      },
      {
        id: 1,
        title: "Destination + Video Header",
        url: "https://themes.themegoods.com/grandtour/demo/destination-video-header/",
        submenu2: null,
      },
      {
        id: 2,
        title: "Destination Right Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/destination-right-sidebar/",
        submenu2: null,
      },
      {
        id: 3,
        title: "Destination Left Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/destination-left-sidebar/",
        submenu2: null,
      },
      {
        id: 4,
        title: "Single Destination",
        url: "https://themes.themegoods.com/grandtour/demo/destination/venice/",
        submenu2: null,
      },
      {
        id: 5,
        title: "Single Destination + Video",
        url: "https://themes.themegoods.com/grandtour/demo/destination/paris/",
        submenu2: null,
      },
    ],
  },
  {
    id: 4,
    title: "Pages",
    isHover: false,
    href: "#",
    submenu1: [
      {
        id: 0,
        title: "About Us",
        url: "https://themes.themegoods.com/grandtour/demo/about-us/",
        submenu2: null,
      },
      {
        id: 1,
        title: "Contact Us",
        url: "https://themes.themegoods.com/grandtour/demo/contact-us/",
        submenu2: null,
      },
      {
        id: 2,
        title: "FAQs",
        url: "https://themes.themegoods.com/grandtour/demo/faqs/",
        submenu2: null,
      },
      {
        id: 3,
        title: "Gallery",
        url: "https://themes.themegoods.com/grandtour/demo/galleries/gallery/",
        submenu2: null,
      },
      {
        id: 4,
        title: "Page Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/page-fullwidth/",
        submenu2: null,
      },
      {
        id: 5,
        title: "Page + Video Background Header",
        url: "https://themes.themegoods.com/grandtour/demo/page-video-header/",
        submenu2: null,
      },
      {
        id: 6,
        title: "Page Right Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/page-right-sidebar/",
        submenu2: null,
      },
      {
        title: "Page Left Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/page-left-sidebar/",
        submenu2: null,
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    isHover: false,
    href: "#",
    submenu1: [
      {
        title: "Blog Right Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-right-sidebar/",
        submenu2: null,
      },
      {
        title: "Blog Left Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-left-sidebar/",
        submenu2: null,
      },
      {
        title: "Blog Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-fullwidth/",
        submenu2: null,
      },
      {
        title: "Blog Grid Right Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-grid-right-sidebar/",
        submenu2: null,
      },
      {
        title: "Blog Grid Left Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-grid-left-sidebar/",
        submenu2: null,
      },
      {
        title: "Blog Frid Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-grid-fullwidth/",
        submenu2: null,
      },
      {
        title: "Blog Full + Grid Right Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-right-sidebar/",
        submenu2: null,
      },
      {
        title: "Blog Full + Grid Left Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-left-sidebar/",
        submenu2: null,
      },
      {
        title: "Blog Full + Grid Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-fullwidth/",
        submenu2: null,
      },
    ],
  },
  {
    id: 6,
    title: "Shortcodes",
    isHover: false,
    href: "#",
    submenu1: [
      {
        title: "Accordion & Toggles",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/accordion-toggles/",
        submenu2: null,
      },
      {
        title: "Alert Boxes",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/alert-boxes/",
        submenu2: null,
      },
      {
        title: "Animated Content",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/animated-content/",
        submenu2: null,
      },
      {
        title: "Buttons & Social Icons",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/buttons-social-icons/",
        submenu2: null,
      },
      {
        title: "Columns",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/columns/",
        submenu2: null,
      },
      {
        title: "Google Maps",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/google-maps/",
        submenu2: null,
      },
      {
        title: "Image Frame & Animation",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/image-frame-animation/",
        submenu2: null,
      },
      {
        title: "Image Teasers",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/image-teasers/",
        submenu2: null,
      },
      {
        title: "Pricing Tables",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/pricing-tables/",
        submenu2: null,
      },
      {
        title: "Tabs",
        url: "https://themes.themegoods.com/grandtour/demo/shortcodes/tabs/",
        submenu2: null,
      },
    ],
  },
  {
    id: 7,
    title: "Shop",
    isHover: false,
    href: "https://themes.themegoods.com/grandtour/demo/shop/",
    submenu1: [
      {
        title: "Shop Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/shop/",
        submenu2: null,
      },
      {
        title: "Shop Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/shop/?sidebar=1",
        submenu2: null,
      },
      {
        title: "Single Product Fullwidth",
        url: "https://themes.themegoods.com/grandtour/demo/shop/beach-shoe/",
        submenu2: null,
      },
      {
        title: "Single Product With Sidebar",
        url: "https://themes.themegoods.com/grandtour/demo/shop/safety-set/?sidebar=1",
        submenu2: null,
      },
    ],
  },
];

export const LISTCOLORMODALOPTION = [
  {
    color: "#FF4A52",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=red",
  },
  {
    color: "#FF9500",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=orange",
  },
  {
    color: "#FFCC00",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=yellow",
  },
  {
    color: "#4CD964",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=green",
  },
  {
    color: "#5AC8FA",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=teal_blue",
  },
  {
    color: "#007AFF",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=blue",
  },
  {
    color: "#5856D6",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=purple",
  },
  {
    color: "#FF2D55",
    href: "https://themes.themegoods.com/grandtour/demo/?styling=pink",
  },
];

export const LISTCARD = [
  {
    id: 0,
    src: modalOptionImage1,
    title: "Demo 1",
    href: "https://themes.themegoods.com/grandtour/demo",
    isHover: false,
  },
  {
    id: 1,
    src: modalOptionImage2,
    title: "Demo 2",
    href: "https://themes.themegoods.com/grandtour/demo2",
    isHover: false,
  },
  {
    id: 2,
    src: modalOptionImage1,
    title: "Left Align Menu",
    href: "https://themes.themegoods.com/grandtour/demo/",
    isHover: false,
  },
  {
    id: 3,
    src: modalOptionImage1,
    title: "Center Align",
    href: "https://themes.themegoods.com/grandtour/demo/?menulayout=centeralign",
    isHover: false,
  },
  {
    id: 4,
    src: modalOptionImage1,
    title: "Center Logo + 2 Menus",
    href: "https://themes.themegoods.com/grandtour/demo/?menulayout=centeralogo",
    isHover: false,
  },
  {
    id: 5,
    src: modalOptionImage3,
    title: "Fullscreen Menu",
    href: "https://themes.themegoods.com/grandtour/demo/?menulayout=hammenufull",
    isHover: false,
  },
  {
    id: 6,
    src: modalOptionImage4,
    title: "Side Menu",
    href: "https://themes.themegoods.com/grandtour/demo/?menulayout=hammenuside",
    isHover: false,
  },
  {
    id: 7,
    src: modalOptionImage1,
    title: "With Frame",
    href: "https://themes.themegoods.com/grandtour/demo/?frame=1",
    isHover: false,
  },
  {
    id: 8,
    src: modalOptionImage1,
    title: "Boxed Layout",
    href: "https://themes.themegoods.com/grandtour/demo/?boxed=1",
    isHover: false,
  },
  {
    id: 9,
    src: modalOptionImage1,
    title: "With Top Bar",
    href: "https://themes.themegoods.com/grandtour/demo/?topbar=1",
    isHover: false,
  },
];
