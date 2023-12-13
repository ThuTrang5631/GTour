const DestinationCard = ({ href, backgroundImage, content }) => {
  return (
    <a
      className="destinationcard hover-card"
      href={href}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 className="destinationcard__title">{content}</h3>
    </a>
  );
};

export default DestinationCard;
