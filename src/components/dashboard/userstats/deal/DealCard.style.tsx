import styled from 'styled-components';

export const DealCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 18.8px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 9.4px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 42.3px 105.28px rgba(0, 0, 0, 0.06),
    0px 21.414px 45.895px rgba(0, 0, 0, 0.04), 0px 8.46px 17.108px rgba(0, 0, 0, 0.03);
  flex-direction: row; /* 수평 정렬을 위한 설정 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-around;
  gap: 9.4px; /* 항목 간의 간격 */
`;

export const DealText = styled.div`
  color: #404040
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 5%;
`;

export const ListWrap = styled.div`
  display: flex;
  width: 479.4px;
  height: 28.2px;
  padding: 0px 18.8px;
  flex-direction: row; /* 수평 정렬을 위한 설정 */
  align-items: center;
  justify-content: space-around;
  gap: 9.4px;
  border-radius: 5.64px 5.64px 0px 0px;
  background: #875cff;
`;

export const Name = styled.div`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.86px; /* 119.067% */
`;

export const USDT = styled.div`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.86px; /* 119.067% */
`;

export const Date = styled.div`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.86px; /* 119.067% */
`;
