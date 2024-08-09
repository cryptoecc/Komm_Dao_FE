// src/pages/dashboard/Sidebar.tsx
import React, { useState } from 'react';
import {
  SidebarContainer,
  Logo,
  NotificationItem,
  Icon,
  NavItem,
  Name,
  SubMenu,
  SubMenuItem,
} from './ad_sidebar.style';
import { PATH } from 'src/constants/path';
import ArrowDown from 'src/assets/admin/keyboard_arrow_down.svg';
import ArrowUp from 'src/assets/admin/keyboard_arrow_up.svg';

const Sidebar: React.FC = () => {
  const [isUserMgmtOpen, setIsUserMgmtOpen] = useState<boolean>(false);

  const toggleUserMgmt = () => {
    setIsUserMgmtOpen(!isUserMgmtOpen);
  };

  return (
    <SidebarContainer>
      <Logo />
      <NavItem onClick={toggleUserMgmt}>
        <Name>User Mgmt</Name>
        <Icon src={isUserMgmtOpen ? ArrowUp : ArrowDown} />
      </NavItem>
      {isUserMgmtOpen && (
        <SubMenu>
          <SubMenuItem to={PATH.USERAPPLICANTS}>Applicants</SubMenuItem>
          <SubMenuItem to={PATH.USERMEMBERS}>Members</SubMenuItem>
          <SubMenuItem to={PATH.USERCOMMITTES}>K-ommittees</SubMenuItem>
          <SubMenuItem to={PATH.USERKOHORTS}>K-ohorts</SubMenuItem>
        </SubMenu>
      )}
      <NotificationItem>{/* <Icon imageUrl="/assets/images/notifications.png" /> */}</NotificationItem>
    </SidebarContainer>
  );
};

export default Sidebar;
