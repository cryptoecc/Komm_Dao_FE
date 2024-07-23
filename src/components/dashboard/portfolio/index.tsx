import React from 'react';
import DealCard from './deal/DealCard';
import ContributionCard from './contribution/Contribution';
import WatchlistCalendarCard from './calendar/WatchlistCalendarCard';
import {
  PortfolioContainer,
  LeftColumn,
  RightColumn,
  PortfolioTitle,
  CalendarTitle,
  TitleContainer,
  PortfolioAmount,
  CalendarContainer,
} from './index.style';

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <LeftColumn>
        <TitleContainer>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <PortfolioAmount>$50,000</PortfolioAmount>
        </TitleContainer>
        <DealCard />
        <ContributionCard />
      </LeftColumn>
      <RightColumn>
        <CalendarContainer>
          <CalendarTitle>Watchlist Calendar</CalendarTitle>
          <WatchlistCalendarCard />
        </CalendarContainer>
      </RightColumn>
    </PortfolioContainer>
  );
};

export default Portfolio;
