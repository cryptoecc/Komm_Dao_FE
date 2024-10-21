import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import { RootState } from 'src/store/store'; // Adjust the import path as necessary
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import styled from 'styled-components';
import RedirectModal from 'src/components/admin/modal/common/RedirectModal';
import GovernanceModal from 'src/components/admin/modal/redirectMotal/Governance';

const MainBoardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const ContentArea = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto; /* 스크롤바 추가 */
  padding: 0 4vh;
`;

const MainBoard: React.FC = () => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user); // Get user info from Redux store
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const navigate = useNavigate();

  const handleGovernanceClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
    navigate('/mainboard/dashboard');
  };
  // Redirect to the main page if user info is not available
  if (!user || user.user_id === 0) {
    return <Navigate to="/" replace />;
  }

  // Redirect to /mainboard/dashboard if on /mainboard
  if (location.pathname === '/mainboard') {
    return <Navigate to="/mainboard/dashboard" replace />;
  }

  return (
    <>
      <MainBoardContainer>
        <Sidebar onGovernanceClick={handleGovernanceClick} />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainBoardContainer>
      {/* 모달 */}
      <RedirectModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <GovernanceModal onClose={handleCloseModal} />
      </RedirectModal>
    </>
  );
};

export default MainBoard;
