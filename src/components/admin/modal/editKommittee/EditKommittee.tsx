import React from 'react';
import { Title, Search, SearchInput } from './EditKommittee.style';

interface KommitProps {
  onSearchChange: (value: string) => void;
}

const EditKommit: React.FC<KommitProps> = ({ onSearchChange }) => {
  return (
    <>
      <Search>
        <SearchInput placeholder="Search Member" onChange={(e) => onSearchChange(e.target.value)} />
      </Search>
      {/* <Title>여기뜨냐?</Title>; */}
    </>
  );
};

export default EditKommit;
