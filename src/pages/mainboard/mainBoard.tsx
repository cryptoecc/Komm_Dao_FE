// src/pages/mainboard/mainBoard.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import styled from 'styled-components';

const MainBoardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const ContentArea = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto; /* 스크롤바 추가 */
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
