import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { SearchBarContainer, SearchIcon, SearchInput } from './SearchBar.styled';

function Search({ handler, value, placeholder }) {
  return (
    <SearchBarContainer>
      <SearchIcon>
        <MdSearch />
      </SearchIcon>
      <SearchInput
        onChange={handler}
        value={value}
        placeholder={placeholder}
      />
    </SearchBarContainer>
  );
}

Search.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  handler: () => {},
  value: '',
  placeholder: 'Search for ...'
};

export default Search;