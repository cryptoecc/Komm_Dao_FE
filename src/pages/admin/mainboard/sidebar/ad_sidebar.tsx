// src/pages/dashboard/Sidebar.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  Logo,
  NotificationItem,
  Icon,
  NavItem,
  Name,
  SubMenu,
  SubMenuItem,
  Discover,
} from './ad_sidebar.style';
import { PATH } from 'src/constants/path';
import ArrowDown from 'src/assets/admin/keyboard_arrow_down.svg';
import ArrowUp from 'src/assets/admin/keyboard_arrow_up.svg';

const Sidebar: React.FC = () => {
  const [isUserMgmtOpen, setIsUserMgmtOpen] = useState<boolean>(false);
  const [isDealMgmtOpen, setIsDealMgmtOpen] = useState<boolean>(false);
  const [isDiscoverMgmtOpen, setIsDiscoverMgmtOpen] = useState<boolean>(false);

  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);
  const [isDealSelected, setIsDealSelected] = useState<boolean>(false);
  const [isDiscoverSelected, setIsDiscoverSelected] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleUserMgmt = () => {
    setIsUserMgmtOpen(!isUserMgmtOpen);
    setIsUserSelected(!isUserSelected);
    setIsDealSelected(false);
    setIsDiscoverSelected(false);
    setIsDealMgmtOpen(false);
  };

  const toggleDealMgmt = () => {
    setIsUserMgmtOpen(false);
    setIsDealMgmtOpen(!isDealMgmtOpen);
    setIsDealSelected(!isDealSelected);
    setIsUserSelected(false);
    setIsDiscoverSelected(false);
  };

  const toggleDiscoverMgmt = () => {
    setIsUserMgmtOpen(false);
    setIsDealMgmtOpen(false);
    setIsDiscoverMgmtOpen(!isDiscoverMgmtOpen);
    setIsDiscoverSelected(!isDiscoverSelected);
    setIsDealSelected(false);
    setIsUserSelected(false);
    navigate(PATH.ADMINDISCOVER);
  };

  return (
    <SidebarContainer>
      <Logo />
      <NavItem $isSelected={isUserSelected} onClick={toggleUserMgmt}>
        <Name>User Mgmt</Name>
        <Icon src={isUserMgmtOpen ? ArrowUp : ArrowDown} />
      </NavItem>
      {isUserMgmtOpen && (
        <SubMenu>
          <SubMenuItem to={PATH.USERAPPLICANTS}>Applicants</SubMenuItem>
          <SubMenuItem to={PATH.USERMEMBERS}>Members</SubMenuItem>
          <SubMenuItem to={PATH.USERCOMMITTES}>Kommittees</SubMenuItem>
          <SubMenuItem to={PATH.USERKOHORTS}>Kohorts</SubMenuItem>
        </SubMenu>
      )}
      <NavItem $isSelected={isDealSelected} onClick={toggleDealMgmt}>
        <Name>Deal Mgmt</Name>
        <Icon src={isDealMgmtOpen ? ArrowUp : ArrowDown} />
      </NavItem>
      {isDealMgmtOpen && (
        <SubMenu>
          <SubMenuItem to={PATH.DEALROOM}>Deal Room</SubMenuItem>
          <SubMenuItem to={PATH.DEALINTEREST}>Deal Interest</SubMenuItem>
        </SubMenu>
      )}
      <Discover $isSelected={isDiscoverSelected} onClick={toggleDiscoverMgmt}>
        <Name>Discover Mgmt</Name>
        <Icon src={isDiscoverMgmtOpen ? ArrowUp : ArrowDown} />
      </Discover>
      <NotificationItem>{/* <Icon imageUrl="/assets/images/notifications.png" /> */}</NotificationItem>
    </SidebarContainer>
  );
};

export default Sidebar;
