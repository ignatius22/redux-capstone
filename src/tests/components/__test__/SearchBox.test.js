import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchBox from '../../../components/SearchBox';

it('it should render component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBox />, div);
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<SearchBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
