import React from 'react';
import renderer from 'react-test-renderer';
import CardList from '../../../components/CardList';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<CardList />).toJSON();
  expect(tree).toMatchSnapshot();
});
