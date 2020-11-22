import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Card from './Card';

const CardList = ({ recipes }) => (
  <div>
    {recipes.map(recipe => (
      <Card
        key={uuid()}
        calories={recipe.recipe.calories}
        title={recipe.recipe.label}
        image={recipe.recipe.image}
      />
    ))}
  </div>
);

CardList.propTypes = {
  recipes: PropTypes.string.isRequired,
};

CardList.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
};

export default CardList;
