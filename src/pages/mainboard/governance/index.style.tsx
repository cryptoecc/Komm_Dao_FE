import styled from 'styled-components';

export const GovernanceContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const GoveranaceHeader = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝으로 배치 */
  align-items: center; /* 수직 중앙 정렬 */
`;

export const WalletWrap = styled.div`
  margin-right: 60px;
`;

export const GovernanceTitle = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

export const GovernanceContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const MainSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 27px;
  margin: 47px 0 0 0;
  width: 100%;
`;
export const SubSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 310px;
  width: 100%;
  gap: 26px;
  border-bottom: 2px solid #d9d9d9;
  padding: 10px 0;
`;
export const NavList = styled.li<{ active: boolean }>`
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
  color: #875cff;
  font-size: 20px;
  font-style: normal;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  line-height: normal;
`;
