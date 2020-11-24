import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setSearchField } from '../../redux/action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should dispatch action', () => {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(setSearchField());

  const actions = store.getActions();
  const expectedPayload = { type: 'CHANGE_SEARCHFIELD' };
  expect(actions).toEqual([expectedPayload]);
});

function success() {
  return {
    type: 'REQUEST_RECIPES_SUCCESS',
  };
}

function fetchData() {
  return dispatch => fetch(
    'https://api.edamam.com/search?q=chicken&app_id=4e80d906&app_key=90d9ed76fe22d477f1c7c3676ed9f686&from=0&to=20',
  )
    .then(() => dispatch(success()));
}

it('should execute fetch data', () => {
  const store = mockStore({});
  return store.dispatch(fetchData()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(success());
  });
});
