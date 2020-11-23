import React from 'react';
import PropTypes from 'prop-types';
import '../containers/App.css';
import { Link } from 'react-router-dom';

const Card = ({
  title, image, id,
}) => (
  <div
    data-testid="card"
    className="tc grow bg-navy br3 pa2 ma3 dib bw2 shadow-3 "
  >
    <Link to={`/${id}`}>
      <img alt="recipes" src={image} />
    </Link>
    <div>
      <h2>{title}</h2>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
