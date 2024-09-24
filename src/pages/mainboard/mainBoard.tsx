import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import { RootState } from 'src/store/store'; // Adjust the import path as necessary
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
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user); // Get user info from Redux store

  // Redirect to the main page if user info is not available
  if (!user || user.user_id === 0) {
    return <Navigate to="/" replace />;
  }

  // Redirect to /mainboard/dashboard if on /mainboard
  if (location.pathname === '/mainboard') {
    return <Navigate to="/mainboard/dashboard" replace />;
  }

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
