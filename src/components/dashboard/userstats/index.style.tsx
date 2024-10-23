import styled from 'styled-components';

export const UserStatsContainer = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: flex-start; /* 시작 부분에 정렬 */
  width: 100%; /* 컨테이너가 전체 너비를 사용하게 설정 */
  margin-top: 20px;
  padding: 5px;
`;

export const Title = styled.h1`
  color: #404040;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
  /* margin-top: 5px; */
`;
