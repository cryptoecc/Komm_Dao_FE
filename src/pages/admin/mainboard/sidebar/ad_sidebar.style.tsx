import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100%;
  flex-shrink: 0;
  background: #f9f8fe;
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

export const NotificationItem = styled.div`
  /* margin-top: auto; */
  padding: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
`;

export const Icon = styled.img`
  width: 12px;
  height: 7.4px;
`;

export const NavItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 25px; /* 패딩을 조정하여 메뉴 항목 간의 간격을 늘림 */
  gap: 100px; /* 아이콘과 텍스트 간의 간격을 조정 */
  width: 100%;
  color: ${(props) => (props.$isSelected ? '#7A23FF' : '#1a0737')}; /* 선택된 경우 색상 변경 */
  font-weight: ${(props) => (props.$isSelected ? 700 : 400)};
  text-decoration: none;
  cursor: pointer;
`;

export const Name = styled.div`
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  /* font-weight: 400; */
  line-height: 50px; /* 250% */
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px; /* 서브메뉴 아이템을 들여쓰기 */
`;

export const SubMenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 25px 0; /* 서브메뉴 아이템 간의 간격 조정 */
  color: #1a0737;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;

  &.active {
    color: #f91bb7; /* 활성화된 서브메뉴 아이템의 색상 */
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const Discover = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 25px; /* 패딩을 조정하여 메뉴 항목 간의 간격을 늘림 */
  gap: 62px; /* 아이콘과 텍스트 간의 간격을 조정 */
  width: 100%;
  color: ${(props) => (props.$isSelected ? '#7A23FF' : '#1a0737')}; /* 선택된 경우 색상 변경 */
  font-weight: ${(props) => (props.$isSelected ? 700 : 400)};
  text-decoration: none;
  cursor: pointer;
`;

export const Contribution = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 25px; /* 패딩을 조정하여 메뉴 항목 간의 간격을 늘림 */
  gap: 29px; /* 아이콘과 텍스트 간의 간격을 조정 */
  width: 100%;
  color: ${(props) => (props.$isSelected ? '#7A23FF' : '#1a0737')}; /* 선택된 경우 색상 변경 */
  font-weight: ${(props) => (props.$isSelected ? 700 : 400)};
  text-decoration: none;
  cursor: pointer;
`;
