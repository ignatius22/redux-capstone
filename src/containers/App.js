import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRecipes } from '../redux/action';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';


const mapStateToProps = (state) => {
  return {
    searchField: state.searchRecipes.searchField,
    recipes: state.requestRecipes.recipes,
    isPending: state.requestRecipes.isPending,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRecipes: () => dispatch(requestRecipes()),
  };
};



const App = ({
  recipes,
  searchField,
  onSearchChange,
  isPending,
  onRequestRecipes,
}) => {
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  useEffect(() => {
    onRequestRecipes();
  }, []);

  return (
    <div className="tc">
      <h1 className="f1">BITE RITE</h1>
      <SearchBox searchChange={onSearchChange} />

      {isPending ? (
        <h1>Loading</h1>
      ) : (
        <ErrorBoundry>
          <CardList recipes={filteredRecipes} />
        </ErrorBoundry>
      )}
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
