// src/pages/mainboard/mainBoard.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import styled from 'styled-components';

const MainBoardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white1};
`;

const MainBoard: React.FC = () => {
  return (
    <MainBoardContainer>
      <Sidebar />
      <ContentArea>
        <Outlet />
      </ContentArea>
    </MainBoardContainer>
  );
};

export default MainBoard;
