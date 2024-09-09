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
  margin: 20px 0;
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
  width: 275px;
  height: 100vh;
  flex-shrink: 0;
  background: #f9f8fe;
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
  color: #1a0737;
  text-decoration: none;
  transition: padding 0.3s ease;

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
  color: #1a0737;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: font-size 0.3s ease;

  @media (max-width: 1024px) {
    color: #1a0737;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: font-size 0.3s ease;
  }

  @media (max-width: 768px) {
    color: #1a0737;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
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
