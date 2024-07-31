// src/pages/dashboard/index.tsx
import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../../../components/dashboard/profile/ProfileCard';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';
import UserStats from 'src/components/dashboard/userstats';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const DashboardTitle = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const ConnectWalletWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <ConnectWalletWrapper>
        <ConnectWallet />
      </ConnectWalletWrapper>
      <ProfileCard />
      <UserStats />
    </DashboardContainer>
  );
};

export default Dashboard;
