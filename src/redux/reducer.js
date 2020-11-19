import {
  CHANGE_SEARCHFIELD,
  REQUEST_RECIPES_PENDING,
  REQUEST_RECIPES_SUCCESS,
  REQUEST_RECIPES_FAILED,
} from '../redux/actionTypes';

const initialStateSearch = {
  searchField: ''
}

export const searchRecipes = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateRecipes = {
  recipes: [],
  isPending: true,
};

export const requestRecipes = (state = initialStateRecipes, action = {}) => {
  switch (action.type) {
    case REQUEST_RECIPES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_RECIPES_SUCCESS:
      return Object.assign({}, state, {
        recipes: action.payload,
        isPending: false,
      });
    case REQUEST_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
