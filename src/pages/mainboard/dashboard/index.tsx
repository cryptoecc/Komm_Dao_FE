// src/pages/dashboard/index.tsx
import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../../../components/dashboard/profile/ProfileCard';
import PortfolioCard from '../../../components/dashboard/portfolio';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white1};
  position: relative; /* For absolute positioning of ConnectWallet */
`;

const DashboardTitle = styled.h1`
  color: #1a0737;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px; /* Adjust margin as needed */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adjust gap as needed */
`;

const ConnectWalletWrapper = styled.div`
  position: absolute; /* Positioning to place it at the top right */
  top: 20px; /* Adjust top position */
  right: 20px; /* Adjust right position */
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <ConnectWalletWrapper>
        <ConnectWallet />
      </ConnectWalletWrapper>
      <ContentContainer>
        <ProfileCard />
        <PortfolioCard />
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
