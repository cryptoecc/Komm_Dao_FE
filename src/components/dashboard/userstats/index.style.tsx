import styled from 'styled-components';

export const UserStatsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: flex-start; /* 시작 부분에 정렬 */
  width: 100%; /* 컨테이너가 전체 너비를 사용하게 설정 */
`;

export const Title = styled.h1`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
`;
