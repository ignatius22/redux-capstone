import {
  CHANGE_SEARCHFIELD,
  REQUEST_RECIPES_PENDING,
  REQUEST_RECIPES_SUCCESS,
  REQUEST_RECIPES_FAILED,
} from './actionTypes';

const initialStateSearch = {
  searchField: '',
};

export const searchRecipes = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRecipes = {
  recipes: [],
  isPending: true,
};

export const requestRecipes = (state = initialStateRecipes, action = {}) => {
  switch (action.type) {
    case REQUEST_RECIPES_PENDING:
      return { ...state, isPending: true };
    case REQUEST_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isPending: false,
      };
    case REQUEST_RECIPES_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
