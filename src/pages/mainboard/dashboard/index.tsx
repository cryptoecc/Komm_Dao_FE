// src/pages/dashboard/index.tsx
import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../../../components/dashboard/profile/ProfileCard';
import UserStats from 'src/components/dashboard/userstats';

const DashboardContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const DashboardTitle = styled.h1`
  color: #1a0737;
  font-family: Inter, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <ProfileCard />
      <UserStats />
    </DashboardContainer>
  );
};

export default Dashboard;
