// src/pages/dashboard/Sidebar.tsx
import React, { useState } from 'react';
import { PATH } from '../../../constants/path';
import { SidebarContainer, Logo, NavItem, Icon, Name, NotificationItem } from '../../dashboard/sidebar/Sidebar.style';
import { images } from '../../../assets/dashboard/images';
import { useNavigate } from 'react-router-dom';
import Modal from 'src/components/admin/modal/common/Modal';
import ContributionModal from 'src/components/admin/modal/redirectMotal/Contribution';

interface SidebarProps {
  onGovernanceClick: () => void; // 모달 열기 함수
}

const Sidebar: React.FC<SidebarProps> = ({ onGovernanceClick }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContributionClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleLogoClick = () => {
    navigate('/mainboard/dashboard'); // 메인 페이지 경로로 이동
  };
  // Governance 클릭 시 모달 열기 및 네비게이션 막기
  // const handleGovernanceClick = (event: React.MouseEvent) => {
  //   event.preventDefault(); // 네비게이션 막기
  //   setIsModalOpen(true); // 모달 열기
  // };

  // // 모달 닫기 함수
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <SidebarContainer>
      <Logo style={{ backgroundImage: `url(${images.sidebarLogo})` }} onClick={handleLogoClick} />
      <NavItem to={PATH.DASHBOARD}>
        <Icon $imageUrl={images.dashboardIcon} />
        <Name>Dashboard</Name>
      </NavItem>
      <NavItem to={PATH.DEAL}>
        <Icon $imageUrl={images.dealIcon} />
        <Name>Deal</Name>
      </NavItem>
      <NavItem to={PATH.DISCOVER}>
        <Icon $imageUrl={images.discoverIcon} />
        <Name>Discover</Name>
      </NavItem>
      <NavItem to={PATH.CONTRIBUTION} onClick={handleContributionClick}>
        <Icon $imageUrl={images.contributionIcon} />
        <Name>Contribution</Name>
      </NavItem>
      <NavItem to={PATH.GOVERNANCE} onClick={onGovernanceClick}>
        <Icon $imageUrl={images.governanceIcon} />
        <Name>Governance</Name>
      </NavItem>
      <NotificationItem>
        <Icon $imageUrl={images.notificationsIcon} />
      </NotificationItem>
      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Access Restricted</h2>
        <p>You cannot access the Governance page at this time.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal> */}
    </SidebarContainer>
  );
};

export default Sidebar;
