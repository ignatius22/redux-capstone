import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import 'tachyons';

import App from './containers/App';

import { requestRecipes, searchRecipes } from './redux/reducer';

import './index.css';

const rootReducers = combineReducers({ requestRecipes, searchRecipes });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
