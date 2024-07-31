import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100%; /* 부모 컨테이너의 높이를 100%로 설정 */
  min-height: 100vh; /* 최소 높이를 화면 전체 높이로 설정 */
`;

export const SidebarContainer = styled.div`
  width: 275px;
  height: 100%; /* 높이를 부모 컨테이너에 맞춤 */
  flex-shrink: 0;
  background: #f9f8fe;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  align-items: flex-start;
  transition: width 0.3s ease;

  @media (max-width: 1024px) {
    width: 220px; /* 중간 크기의 화면에서 사이드바 크기 조정 */
  }

  @media (max-width: 768px) {
    width: 180px; /* 작은 화면에서 사이드바 크기 조정 */
  }

  @media (max-width: 480px) {
    width: 60px; /* 모바일 화면에서 사이드바 최소 크기로 축소 */
    padding-left: 10px; /* 패딩 줄이기 */
  }
`;

export const Logo = styled.div`
  width: 80px; /* 기본 크기 */
  height: 80px; /* 기본 크기 */
  background: url('/assets/images/sidebarLogo.png') no-repeat center center;
  background-size: contain;
  margin: 20px 0;

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
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

export const Icon = styled.div<{ imageUrl: string }>`
  width: 24px;
  height: 24px;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: contain;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

export const Name = styled.div`
  color: #1a0737;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: font-size 0.3s ease;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    display: none; /* 모바일 화면에서 텍스트 숨기기 */
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
    bottom: 15%;
  }

  @media (max-width: 768px) {
    bottom: 20%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    bottom: 30%;
  }
`;
