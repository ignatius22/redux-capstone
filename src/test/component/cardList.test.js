/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest';

import ReactDOM from 'react-dom';
import CardList from '../../components/CardList';

afterEach(cleanup);

it('* renders *', () => {
  const { asFragment } = render(<CardList title="map" />);
  expect(asFragment()).toMatchSnapshot();
});

it('* renders without crashing *', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardList />, div);
});
