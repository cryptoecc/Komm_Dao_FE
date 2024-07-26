import React from 'react';
import { UserStatsContainer, Title, TitleContainer } from './index.style';
import PortfolioCard from './portfolio/PortfolioCard';
import PointsHistory from './pointshistory/PointsHistory';

const UserStats: React.FC = () => {
  return (
    <UserStatsContainer>
      <TitleContainer>
        <Title>Portfolio</Title>
      </TitleContainer>
      <PortfolioCard />
      <TitleContainer>
        <Title>Points History</Title>
      </TitleContainer>
      <PointsHistory />
    </UserStatsContainer>
  );
};

export default UserStats;
