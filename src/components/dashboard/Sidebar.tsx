// src/pages/dashboard/Sidebar.tsx
import React from 'react';
import { PATH } from '../../constants/path';
import { SidebarContainer, Logo, NavItem, Icon, Name } from '../../components/dashboard/Sidebar.style';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>My Logo</Logo>
      <NavItem to={`${PATH.DASHBOARD}/Deal`}>
        {/* <Icon>🏠</Icon> */}
        <Name>Section 1</Name>
      </NavItem>
      <NavItem to={`${PATH.DASHBOARD}/Contribution`}>
        {/* <Icon>📄</Icon> */}
        <Name>Section 2</Name>
      </NavItem>
      {/* <NavItem to={`${PATH.DASHBOARD}/section3`}>
        <Icon>📊</Icon>
        <Name>Section 3</Name>
      </NavItem>
      <NavItem to={`${PATH.DASHBOARD}/section4`}>
        <Icon>⚙️</Icon>
        <Name>Section 4</Name>
      </NavItem>
      <NavItem to={`${PATH.DASHBOARD}/section5`}>
        <Icon>📞</Icon>
        <Name>Section 5</Name>
      </NavItem> */}
    </SidebarContainer>
  );
};

export default Sidebar;
