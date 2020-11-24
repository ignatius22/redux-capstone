import { searchRecipes, requestRecipes } from '../../redux/reducer';
import * as types from '../../redux/actionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(searchRecipes(undefined, {})).toEqual({
      searchField: '',
    });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    const startAction = {
      type: types.CHANGE_SEARCHFIELD,
    };
    expect(searchRecipes({}, startAction)).toEqual({});
  });

  it('should handle REQUEST_RECIPES_SUCCESS', () => {
    const successAction = {
      recipes: [],
      isPending: true,
    };
    expect(requestRecipes({}, successAction)).toEqual({});
  });

  it('should handle REQUEST_RECIPES_FAILED', () => {
    const failAction = {
      type: types.REQUEST_RECIPES_FAILED,
    };
    expect(requestRecipes({}, failAction)).toEqual({});
  });
});
