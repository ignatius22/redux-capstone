import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setSearchField, requestRecipes } from '../redux/action';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './App.css';
import Detailed from '../components/Detailed';

const mapStateToProps = state => ({
  searchField: state.searchRecipes.searchField,
  recipes: state.requestRecipes.recipes,
  isPending: state.requestRecipes.isPending,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRecipes: () => dispatch(requestRecipes()),
});

const App = ({
  recipes,
  searchField,
  onSearchChange,
  isPending,
  onRequestRecipes,
}) => {
  const filteredRecipes = recipes.filter(recipe => recipe.recipe.label
    .toLowerCase()
    .includes(searchField.toLowerCase()));

  useEffect(() => {
    onRequestRecipes();
  }, []);

  return (
    <Router>
      <div className="tc">
        <h1 className="f1">Munch It</h1>
        <Route exact path="/">
          <div>
            <SearchBox searchChange={onSearchChange} />
            {isPending ? (
              <h1>Loading</h1>
            ) : (
              <CardList recipes={filteredRecipes} />
            )}
          </div>
        </Route>
        <Switch>
          <Route path="/:detailId" component={Detailed} />
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  recipes: PropTypes.instanceOf(Array).isRequired,
  isPending: PropTypes.string.isRequired,
  searchField: PropTypes.string.isRequired,
  onRequestRecipes: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
