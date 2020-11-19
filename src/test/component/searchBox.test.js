/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest';
import SearchBox from '../../components/SearchBox';
import ReactDOM from 'react-dom'



afterEach(cleanup);

it('* renders *', () => {
  const { asFragment } = render(<SearchBox onChange="any props" />);
  expect(asFragment()).toMatchSnapshot();
});

it('* renders without crashing *', () => {
	const div = document.createElement('div')
	ReactDOM.render(<SearchBox />, div);
})

describe("input value", () => {
	it("return update onchange", () => {
		const { queryByPlaceholderText } = render(<SearchBox  />)
		const searchInput = queryByPlaceholderText('search chicken');
		fireEvent.change(searchInput, { target: { value: "test" } })
		expect(searchInput.value).toBe("test")
		
	})
})