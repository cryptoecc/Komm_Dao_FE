import styled from 'styled-components';

// types/deal.ts (새로운 파일 생성)
export interface Deal {
  id: number;
  title: string;
  description: string;
  amount: number;
  percentage: number; // 게이지의 비율을 나타내는 새로운 필드 추가
}

// DealList의 스타일
export const DealListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* 카드 사이의 간격 */
  justify-content: center; /* 화면 중앙 정렬 */
  border-radius: 30px;
  border: 7px solid #f9f9f9;
  background: #fff;
  flex-shrink: 0;
  @media (min-width: 1024px) {
    /* 화면이 넓을 때 카드들을 가로로 3개씩 배치 */
    justify-content: space-between;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* 화면이 중간 크기일 때 카드들을 가로로 2개씩 배치 */
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    /* 모바일 화면에서 카드들 사이의 간격을 줄임 */
    gap: 15px;
  }
`;

export const DealItem = styled.div`
  width: 40vw; /* 브라우저 너비의 40% */
  height: 30vh; /* 브라우저 높이의 30% */
  max-width: 500px; /* 최대 너비를 설정하여 카드가 너무 커지지 않도록 함 */
  max-height: 400px; /* 최대 높이를 설정하여 카드가 너무 커지지 않도록 함 */
  flex-shrink: 0;
  border-radius: 30px;
  border: 7px solid transparent;
  background: #fff;
  backdrop-filter: blur(2px);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow: hidden; /* 내용이 영역을 넘을 경우 숨김 처리 */

  /* 모바일 화면에서 카드 크기 조정 */
  @media (max-width: 767px) {
    width: 90vw; /* 모바일 화면에서 너비를 브라우저 너비의 90%로 설정 */
    height: auto; /* 높이를 자동으로 조정 */
    font-size: 14px; /* 폰트 크기 조정 */
  }

  /* 태블릿 화면에서 카드 크기 조정 */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50vw; /* 태블릿 화면에서 너비를 브라우저 너비의 50%로 설정 */
    height: auto; /* 높이를 자동으로 조정 */
  }

  &:hover {
    border-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
    border-image-slice: 1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start; /* 아이콘을 왼쪽으로 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%; /* 부모 컨테이너의 너비를 100%로 설정하여 왼쪽 정렬 유지 */

  img {
    max-width: 100%; /* 아이콘이 부모의 너비를 초과하지 않도록 설정 */
    max-height: 100px; /* 아이콘의 최대 높이 설정 */
    object-fit: contain; /* 아이콘이 비율을 유지하며 컨테이너에 맞도록 조정 */
  }
`;

export const GaugeWrapper = styled.div`
  width: 100%;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  margin-bottom: 15px;
  position: relative;

  &::before {
    content: '';
    display: block;
    height: 100%;
    background: #875cff;
    border-radius: 5px;
    width: 50%; /* 이 값을 동적으로 조정하여 게이지의 채워진 정도를 설정합니다. */
  }
`;

export const PercentageLabel = styled.div`
  font-size: 12px;
  color: #555;
  background: #fff;
  width: 79px;
  height: 23px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DealTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 16px; /* 모바일 화면에서 제목 폰트 크기 줄이기 */
  }
`;

export const DealDescription = styled.p`
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 10px; /* 모바일 화면에서 설명과 금액 사이의 간격을 조정합니다. */

  @media (max-width: 767px) {
    font-size: 12px; /* 모바일 화면에서 설명 폰트 크기 줄이기 */
  }
`;

export const DealAmount = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #875cff;
  margin-top: auto;

  @media (max-width: 767px) {
    font-size: 14px; /* 모바일 화면에서 금액 폰트 크기 줄이기 */
  }
`;
