import React, { useState } from 'react';
import { SearchBarContainer, SearchInput, SearchIcon } from './SearchBar.style';
import searchIcon from 'src/assets/discover/search.png';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // 검색어를 상위 컴포넌트로 전달할 함수
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // 검색어 변경 시 상위로 전달
  };

  return (
    <SearchBarContainer>
      <SearchInput type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search..." />
      <SearchIcon src={searchIcon} alt="Search Icon" />
    </SearchBarContainer>
  );
};

export default SearchBar;
