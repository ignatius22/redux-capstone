import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestRecipes } from '../redux/action';

const mapStateToProps = state => ({
  recipes: state.requestRecipes.recipes,
});

const mapDispatchToProps = dispatch => ({
  onRequestRecipes: () => dispatch(requestRecipes()),
});

const Detailed = ({
  recipes,
  onRequestRecipes,
}) => {
  useEffect(() => {
    onRequestRecipes();
  }, []);

  const { detailId } = useParams();
  const label = `${recipes[detailId].recipe.label}`;
  const calories = `${recipes[detailId].recipe.calories}`;
  const image = `${recipes[detailId].recipe.image}`;
  const digest = `${recipes[detailId].recipe.digest[detailId].label}`;
  const schemaOrgTag = `${recipes[detailId].recipe.digest[detailId].schemaOrgTag}`;
  const tag = `${recipes[detailId].recipe.digest[detailId].tag}`;
  const ingredients = `${recipes[detailId].recipe.ingredients[detailId].text}`;
  const ingredientImage = `${recipes[detailId].recipe.ingredients[detailId].image}`;
  const ingredientWeight = `${recipes[detailId].recipe.ingredients[detailId].weight}`;

  return (
    <>
      <div>
        <Link
          to="/"
          className="mb5 f6 link dim br1 ph3 pv2  dib white bg-black"
        >
          Go back to Munch It
        </Link>
      </div>
      <div className="dt mw7 center pv4 pv5-m pv6-ns shadow-3 pa3 bg-light-yellow black mb5">
        <div className="dtc v-top">
          <img src={image} alt="recipe" className="mw5 db bg-navy br3" />
        </div>
        <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
          <h2>{label}</h2>
          <p className="lh-copy mv0">
            Calories:
            {calories}
          </p>
          <h3>Digest</h3>
          <p className="lh-copy mv0">
            Label:
            {digest}
          </p>
          <p className="lh-copy mv0">
            <b>Tag:</b>
            {tag}
          </p>
          <p className="lh-copy mv0">
            <b>OrgTag:</b>
            {schemaOrgTag}
          </p>
          <h4>Ingredients</h4>
          <p className="lh-copy mv0">
            <b>desc:</b>
            {ingredients}
          </p>
          <p className="lh-copy mv0">
            <b>weight:</b>
            {ingredientWeight}
          </p>
          <img
            src={ingredientImage}
            alt="recipe"
            className="w-50 bg-navy br-100"
          />
        </div>
      </div>
    </>
  );
};

Detailed.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
  onRequestRecipes: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailed);
