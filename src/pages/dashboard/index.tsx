// src/pages/dashboard/Dashboard.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './';
import { DashboardContainer, Content } from '../../components/dashboard/Sidebar.style';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
