/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest';
import Card from '../../components/Card';
import ReactDOM from 'react-dom'


afterEach(cleanup);

it('* renders *', () => {
  const { asFragment } = render(<Card label='any props'/>);
  expect(asFragment()).toMatchSnapshot();
});

it('* renders without crashing *', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Card />, div)
})
