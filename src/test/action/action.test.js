import * as reducerAction from '../../redux/action';

describe('get Characters', () => {
  const parameter = 'character';

  it('should create an action to search for all recipe', () => {
    const expectedAction = {
      type: 'CHANGE_SEARCHFIELD',
      payload: parameter,
    };
    expect(reducerAction.setSearchField(parameter)).toEqual(expectedAction);
  });
});
