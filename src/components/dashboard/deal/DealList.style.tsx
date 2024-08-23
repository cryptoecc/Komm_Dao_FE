import styled from 'styled-components';

export const DealListContainer = styled.div`
  display: flex;
  margin-left: 50px;
  padding: 10px;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-start;

  @media (max-width: 767px) {
    gap: 15px;
  }
`;

export const DealWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  max-width: 500px;

  @media (max-width: 767px) {
    width: 90vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70vw;
  }
`;

export const DealItem = styled.div`
  width: 40vw;
  height: 30vh;
  max-width: 500px;
  max-height: 400px;
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
  overflow: hidden;

  @media (max-width: 767px) {
    width: 90vw;
    height: auto;
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50vw;
    height: auto;
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
  justify-content: space-between; /* 아이콘과 상태 배지를 양쪽에 배치 */
  align-items: center;
  width: 100%;

  img {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }
`;

export const StatusBadge = styled.div<{ status: 'ongoing' | 'finished' }>`
  background-color: ${(props) => (props.status === 'ongoing' ? '#875cff' : '#cccccc')};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
  align-self: flex-start;
`;

export const GaugeWrapper = styled.div`
  width: 100%;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  margin-bottom: 15px;
  position: relative;
`;

export const Gauge = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #875cff;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

export const PercentageLabel = styled.div`
  font-size: 12px;
  color: #555;
  background: #fff;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  align-self: flex-start;
  position: absolute;
  top: -20px;
  right: 0;
`;

export const DealTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const DealDescription = styled.p`
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const DealAmount = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #875cff;
  margin-top: auto;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
