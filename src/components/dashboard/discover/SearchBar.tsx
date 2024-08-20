import React from 'react';
import { SearchBarContainer, SearchInput, SearchIcon } from './SearchBar.style';
import searchIcon from 'src/assets/discover/search.png';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="Search..." />
      <SearchIcon src={searchIcon} alt="Search Icon" />
    </SearchBarContainer>
  );
};

export default SearchBar;
