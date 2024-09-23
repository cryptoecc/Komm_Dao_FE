import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from 'src/components/dashboard/discover/SearchBar';
import { CalendarButton } from 'src/components/dashboard/discover/SearchBar.style';
import CalendarIcon from '../../../assets/discover/calendar_btn.png';
import styled from 'styled-components';
import DiscoverList from 'src/components/dashboard/discover/DiscoverList';
import { PATH } from 'src/constants/path'; // Import the PATH constants

const DiscoverContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

const DiscoverTitle = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const DiscoverContent = styled.div``;

const TopContents = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Discover: React.FC = () => {
  const navigate = useNavigate();

  const handleCalendarClick = () => {
    navigate(PATH.DISCOVER_CALENDAR); // Navigate to the calendar page
  };

  return (
    <DiscoverContainer>
      <DiscoverTitle>Discover</DiscoverTitle>

      <DiscoverContent>
        <TopContents>
          <SearchBar />
          <CalendarButton onClick={handleCalendarClick}>
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
