const OptionBtn = () => {
  return (
    <div className="optionbtn__wrap">
      <ul className="optionbtn">
        <li className="optionbtn__item">
          <button className="optionbtn__btn" title="Choose Theme Styling">
            <i className="fa-solid fa-gear"></i>
          </button>
        </li>
        <li className="optionbtn__item">
          <a
            title="Showcase"
            href="https://themes.themegoods.com/grandtour/landing/showcase/"
            className="optionbtn__btn"
          >
            <i className="fa-regular fa-heart"></i>
          </a>
        </li>
        <li className="optionbtn__item">
          <a
            title="Theme Documentation"
            href="https://themes.themegoods.com/grandtour/doc"
            className="optionbtn__btn"
          >
            <i className="fa-solid fa-book-open"></i>
          </a>
        </li>
        <li className="optionbtn__item">
          <a
            href="https://1.envato.market/EnokD"
            className="optionbtn__btn"
            title="Purchase Theme"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OptionBtn;
