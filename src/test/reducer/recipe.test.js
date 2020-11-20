import reducer from '../../redux/reducer';

const initialState = [1, 2, 3];

it('should return the initial state', () => {
  expect(reducer(initialState, { type: 'ADD_NUMBER' }).toEqual(initialState));
});

it('should add the specified number to the numbers array', () => {
  expect(
    reducer(initialState, { type: 'ADD_NUMBER', reducer: 1 }).toEqual([
      1,
      2,
      3,
      1,
    ]),
  );
});
