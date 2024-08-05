import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  height: 38px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: var(--Purple-400, #d3b8ff);
`;

export const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
  min-width: 100px; /* 아이템의 최소 너비를 설정하여 줄바꿈 방지 */
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.86px; /* 99.222% */

  @media (max-width: 768px) {
    font-size: 14px; /* 화면이 좁을 때 텍스트 크기 줄이기 */
    flex-basis: 50%;
  }

  @media (max-width: 480px) {
    font-size: 12px; /* 더 좁은 화면에서는 텍스트 크기 추가로 줄이기 */
    flex-basis: 100%;
  }
`;

export const DataContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

export const DataRow = styled.div`
  display: flex;
  height: 38px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  @media (max-width: 768px) {
    padding: 8px; /* 작은 화면에서는 패딩을 줄임 */
  }
`;

export const DataItem = styled.div`
  flex: 1;
  text-align: center;
  font-family: Inter;
  min-width: 100px; /* 아이템의 최소 너비를 설정하여 줄바꿈 방지 */
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.86px; /* 111.625% */

  @media (max-width: 768px) {
    font-size: 14px; /* 화면이 좁을 때 텍스트 크기 줄이기 */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* 더 좁은 화면에서는 텍스트 크기 추가로 줄이기 */
  }
`;
