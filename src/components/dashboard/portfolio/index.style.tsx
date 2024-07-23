import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  border-right: 7px solid #f9f9f9;
  background: rgba(222, 210, 252, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: flex-start; /* 시작 부분에 정렬 */
  width: 100%; /* 컨테이너가 전체 너비를 사용하게 설정 */
`;

export const PortfolioTitle = styled.h1`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 10px; /* 제목과 금액 사이의 간격 조정 */
`;

export const PortfolioAmount = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const CalendarTitle = styled.h1`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  width: 100%;
`;
