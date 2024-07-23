// src/pages/dashboard/Sidebar.tsx
import React from 'react';
import { PATH } from '../../../constants/path';
import { SidebarContainer, Logo, NavItem, Icon, Name, NotificationItem } from '../../dashboard/sidebar/Sidebar.style';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo />
      <NavItem to={PATH.DASHBOARD}>
        <Icon imageUrl="/assets/images/dashboard.png" />
        <Name>Dashboard</Name>
      </NavItem>
      <NavItem to={PATH.DEAL}>
        <Icon imageUrl="/assets/images/deal.png" />
        <Name>Deal</Name>
      </NavItem>
      <NavItem to={PATH.DISCOVER}>
        <Icon imageUrl="/assets/images/discover.png" />
        <Name>Discover</Name>
      </NavItem>
      <NavItem to={PATH.CONTRIBUTION}>
        <Icon imageUrl="/assets/images/contribution.png" />
        <Name>Contribution</Name>
      </NavItem>
      <NavItem to={PATH.GOVERNANCE}>
        <Icon imageUrl="/assets/images/governance.png" />
        <Name>Governance</Name>
      </NavItem>
      <NotificationItem>
        <Icon imageUrl="/assets/images/notifications.png" />
      </NotificationItem>
    </SidebarContainer>
  );
};

export default Sidebar;
