import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input
      data-testid="input"
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="search chicken"
      onChange={searchChange}
    />
  </div>
);

SearchBox.propTypes = {
  searchChange: PropTypes.func.isRequired,
};

export default SearchBox;
