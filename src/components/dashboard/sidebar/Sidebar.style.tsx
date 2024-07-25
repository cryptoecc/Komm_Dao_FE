// src/components/dashboard/sidebar/Sidebar.style.tsx

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  width: 275px;
  height: 100%;
  flex-shrink: 0;
  background: #f8f8fa;
  display: flex;
  flex-direction: column;
  padding-left: 20px; /* 사이드바의 왼쪽 패딩 추가 */
  align-items: flex-start; /* 아이템을 왼쪽 정렬 */
`;

export const Logo = styled.div`
  width: 88px;
  height: 88px;
  background: url('/assets/images/sidebarLogo.png');
  margin: 20px 0; /* 상하 여백 추가 */
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 25px; /* 패딩을 조정하여 메뉴 항목 간의 간격을 늘림 */
  gap: 20px; /* 아이콘과 텍스트 간의 간격을 조정 */
  width: 100%;
  color: #1a0737;
  text-decoration: none;

  /* &.active {
    background-color: #a4a4a4;
  }

  &:hover {
    background-color: #555;
  } */
`;

export const Icon = styled.div<{ imageUrl: string }>`
  width: 24px;
  height: 24px;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: contain;
`;

export const Name = styled.div`
  color: #1a0737;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NotificationItem = styled.div`
  margin-top: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
