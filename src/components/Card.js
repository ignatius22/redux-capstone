import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image, calories }) => (
  <div data-testid="card" className="tc grow bg-navy br3 pa2 ma3 dib bw2 shadow-3 ">
    <img alt="recipes" src={image} />
    <div>
      <h2>{title}</h2>
      <p>{calories}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
};

export default Card;
