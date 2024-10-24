import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  height: 38px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 5px;
  background: #eeedfd;
  position: sticky;
  top: 0; /* 상단에 고정 */
  z-index: 1; /* 스크롤되는 내용 위에 오도록 설정 */
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const HeaderItem = styled.div`
  text-align: center;
  width: 300px;
  color: #404040;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.86px; /* 99.222% */

  &.activity {
    width: 400px;

    /* flex-basis: 50px; */
    /* flex-shrink: 0; 너비를 고정하고 줄어들지 않게 설정 */
  }

  &.xp {
    width: 200px;

    /* flex-basis: 50px; */
    /* flex-shrink: 0; 너비를 고정하고 줄어들지 않게 설정 */
  }

  @media (max-width: 768px) {
    font-size: 12px; /* 화면이 좁을 때 텍스트 크기 줄이기 */
    flex-basis: 50%;
  }

  @media (max-width: 480px) {
    font-size: 10px; /* 더 좁은 화면에서는 텍스트 크기 추가로 줄이기 */
    flex-basis: 100%;
  }
`;

export const DataContainer = styled.div`
  max-height: 150px; /* 데이터 3개의 높이에 맞게 설정 */
  overflow-y: auto; /* 데이터가 초과되면 스크롤바 표시 */
`;

export const DataRow = styled.div`
  display: flex;
  height: 30px; /* 각 데이터 행의 높이 설정 */
  padding: 5px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: stretch;

  @media (max-width: 768px) {
    padding: 8px; /* 작은 화면에서는 패딩을 줄임 */
  }
`;

export const DataItem = styled.div`
  text-align: center;

  width: 300px;
  color: #404040;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.86px; /* 111.625% */

  &.activity {
    width: 400px;
    padding-left: 15px;
  }

  &.xp {
    width: 200px;
    padding-left: 15px;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* 화면이 좁을 때 텍스트 크기 줄이기 */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* 더 좁은 화면에서는 텍스트 크기 추가로 줄이기 */
  }
`;

export const NoDataMessage = styled.div`
  height: 100px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  padding-top: 60px;
  color: #404040;
  /* text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px; */
`;
