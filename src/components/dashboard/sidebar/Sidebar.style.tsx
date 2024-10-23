import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100%; /* 부모 컨테이너의 높이를 100%로 설정 */
  min-height: 100vh; /* 최소 높이를 화면 전체 높이로 설정 */
`;

export const Logo = styled.div`
  width: 80px; /* Fixed size */
  height: 80px; /* Fixed size */
  background: url('/assets/images/sidebarLogo.png') no-repeat center center;
  background-size: contain;
  margin: 70px 0px 20px 0px;
  flex-shrink: 0; /* Prevent the logo from shrinking */
  cursor: pointer;

  /* Ensure the size stays consistent across all screen sizes */
  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }

  /* Disable the logo from being affected by zoom or any potential container resizing */
  @media (max-width: 320px) {
    width: 80px;
    height: 80px;
  }
`;

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  align-items: flex-start;
  position: sticky;
  top: 0;
  transition: width 0.3s ease;

  @media (max-width: 1024px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    width: 180px;
  }

  @media (max-width: 480px) {
    width: 60px;
    padding-left: 10px;
  }

  /* Ensure the logo size is not constrained */
  & > ${Logo} {
    flex-shrink: 0; /* Prevent the logo from shrinking */
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 25px;
  gap: 20px;
  width: 100%;
  color: #1a0737; /* 기본 텍스트 색상 */
  text-decoration: none;
  transition: padding 0.3s ease, background-color 0.3s ease, color 0.3s ease;

  &.active {
    background-color: transparent;
    color: #7a23ff !important; /* 활성화된 항목의 텍스트 색상 (보라색) */
  }

  &:hover {
    background-color: #eeedfd; /* Hover 배경색 */
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const Icon = styled.div<{ $imageUrl: string }>`
  width: 24px;
  height: 24px;
  background: url(${(props) => props.$imageUrl}) no-repeat center center;
  background-size: contain;

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;

export const Name = styled.div`
  color: #404040;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: font-size 0.3s ease;

  @media (max-width: 1024px) {
    color: #404040;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: font-size 0.3s ease;
  }

  @media (max-width: 768px) {
    color: #404040;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: font-size 0.3s ease;
  }

  @media (max-width: 480px) {
    display: none; /* Hide icon on smaller screens or when zoomed in */
  }
`;

export const NotificationItem = styled.div`
  padding: 20px;
  display: flex;
  justify-content: first baseline;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 10%;

  @media (max-width: 1024px) {
    display: none; /* Hide the notification icon on smaller screens */
  }

  @media (max-width: 768px) {
    display: none; /* Hide the notification icon on smaller screens */
  }

  @media (max-width: 480px) {
    display: none; /* Hide the notification icon on smaller screens */
  }
`;
