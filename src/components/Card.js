const Card = ({ title, image, calories }) => {
  return (
    <div data-testid='card' className="tc grow bg-navy br3 pa2 ma3 dib bw2 shadow-3 ">
      <img alt="recipes" src={image} />
      <div>
        <h2>{title}</h2>
        <p>{calories}</p>
      </div>
    </div>
  );
};

export default Card;