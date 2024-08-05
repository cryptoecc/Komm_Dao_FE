// components/dashboard/deal/DealList.style.ts
import styled from 'styled-components';

export const DealListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* 카드 사이의 간격 */
  justify-content: center; /* 화면 중앙 정렬 */

  @media (min-width: 1024px) {
    /* 화면이 넓을 때 카드들을 가로로 3개씩 배치 */
    justify-content: space-between;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* 화면이 중간 크기일 때 카드들을 가로로 2개씩 배치 */
    justify-content: space-between;
  }
`;

export const DealItem = styled.div`
  width: 512px; /* 카드의 최대 너비 */
  flex-shrink: 0;
  border-radius: 30px;
  border: 7px solid transparent; /* 기본 테두리 색상을 투명으로 설정 */
  background: #fff;
  backdrop-filter: blur(2px);
  box-sizing: border-box; /* padding 및 border를 포함하여 전체 너비를 계산 */
  position: relative; /* 애니메이션을 적용할 때 위치 조정 필요 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  /* 모바일 화면에서 너비 조정 */
  @media (max-width: 767px) {
    max-width: calc(100% - 30px); /* 카드의 최대 너비를 화면 너비에 맞게 조정 */
    /* 모바일 화면에서 폰트 크기 조정 */
    font-size: 14px; /* 모바일 화면에서 폰트 크기 줄이기 */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* 화면이 중간 크기일 때 카드는 2개씩 배치 */
    max-width: calc(50% - 15px); /* 한 줄에 2개씩 배치 */
  }

  @media (min-width: 1024px) {
    /* 화면이 넓을 때 카드는 3개씩 배치 */
    max-width: calc(33.333% - 20px); /* 한 줄에 3개씩 배치 */
  }

  /* 마우스 호버 시 테두리가 무지개 색상으로 변경 */
  &:hover {
    border-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
    border-image-slice: 1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* 약간의 그림자 추가 */
  }
`;

/* DealItem 내부의 텍스트 및 요소 스타일을 설정합니다. */
export const IconWrapper = styled.div`
  margin-bottom: 15px;
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
