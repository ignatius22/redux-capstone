import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Card from './Card';

const CardList = ({ recipes }) => (

  <div data-testid="recipes">
    {recipes.map((recipe, i) => (
      <Card
        key={uuid()}
        id={i}
        title={recipe.recipe.label}
        image={recipe.recipe.image}
      />
    ))}
  </div>
);

CardList.propTypes = {
  recipes: PropTypes.instanceOf(Array),
};
CardList.defaultProps = {
  recipes: [],
};

export default CardList;
