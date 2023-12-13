const PostCard = ({ href, title, desc, dates, src }) => {
  return (
    <a className="postcard hover-card" href={href}>
      <div className="postcard__top">
        <img src={src} alt="postcard"></img>
      </div>
      <div className="postcard__bottom">
        <p className="postcard__dates">{dates}</p>
        <h4 className="postcard__title">{title}</h4>
        <p className="postcard__desc">{desc}</p>
        <div className="postcard__btn">
          <button className="postcard__readmore" href={href}>
            Read More
          </button>
          <span className="postcard__btnicon">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
