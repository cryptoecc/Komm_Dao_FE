import React from 'react';
import SearchBar from 'src/components/dashboard/discover/SearchBar';
import { CalendarButton } from 'src/components/dashboard/discover/SearchBar.style';
import CalendarIcon from '../../../assets/discover/calendar_btn.png';
import styled from 'styled-components';
import DiscoverList from 'src/components/dashboard/discover/DiscoverList';

const DiscoverContainer = styled.div`
  padding: 20px;
`;

const DiscoverTitle = styled.h1`
  color: #1a0737;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  padding: 20px;
`;

const DiscoverContent = styled.div``;

const TopContents = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Discover: React.FC = () => {
  return (
    <DiscoverContainer>
      <DiscoverTitle>Discover</DiscoverTitle>

      <DiscoverContent>
        <TopContents>
          <SearchBar />
          <CalendarButton>
            <img src={CalendarIcon} alt="Calendar icon" />
            My Calendar
          </CalendarButton>
        </TopContents>
        <DiscoverList />
      </DiscoverContent>
    </DiscoverContainer>
  );
};

export default Discover;
