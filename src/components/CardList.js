import React from 'react';
import Card from './Card';

const CardList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, i) => {
        return (
          <Card
            key={i}
            calories={recipe.recipe.calories}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
          />
        );
      })}
    </div>
  );
};

export default CardList;
