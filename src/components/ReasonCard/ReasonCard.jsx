const ReasonCard = ({ src, title, desc }) => {
  return (
    <div className="reasoncard">
      <div className="resoncard__top">
        <img className="reasoncard__topimage" src={src} alt="reason"></img>
      </div>
      <div className="reasoncard__bottom">
        <h4 className="reasoncard__title">{title}</h4>
        <p className="reasoncard__desc">{desc}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
