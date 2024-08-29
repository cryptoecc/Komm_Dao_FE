import styled from 'styled-components';

export const DealCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Ensure at least two columns */
  gap: 20px; /* Space between cards */
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  box-sizing: border-box; /* Ensure padding is included in width calculation */

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Larger cards on larger screens */
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Even larger cards on larger screens */
  }
`;

export const DealItem = styled.div`
  background: #ffffff; /* 내부 배경은 흰색으로 유지 */
  border: 7px solid #f9f9f9; /* 초기 경계선 색상 */
  border-radius: 30px;
  padding: 20px;
  width: 100%; /* Full width within the grid */
  max-width: 512px; /* Constrain the max width */
  position: relative;
  transition: border 0.3s ease, border-radius 0.3s ease; /* Add smooth transition */

  &:hover {
    border: 7px solid transparent; /* 경계선을 투명하게 설정 */
    background: linear-gradient(#ffffff, #ffffff),
      /* 내부 흰색 배경 유지 */
        linear-gradient(to right bottom, #ffdede, #6100ff, #00d7f7, #4dff30, #ffe03e, #ff8730, #ff0000); /* 무지개색 그라데이션 */
    background-origin: border-box; /* 배경을 경계선 밖으로 이동 */
    background-clip: padding-box, border-box; /* 경계선과 배경을 각각 클립 */
    border-radius: 30px; /* 둥근 모서리 유지 */
  }
`;

export const DealHeader = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const DealTitle = styled.h3`
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
`;

export const DealDescription = styled.p`
  font-size: 16px;
  height: 100px;
  color: #555;
  margin: 10px 0;
  max-height: 100px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 5px;
`;

export const GaugeWrapper = styled.div`
  width: 100%;
  height: 13px;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
`;

export const Gauge = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #875cff; /* The purple color for the filled portion */
  transition: width 0.3s ease;
  border-radius: 8px;
`;

export const PercentageLabel = styled.div`
  position: absolute;
  right: 0;
  top: -25px;
  font-size: 14px;
  color: #875cff;
  font-weight: 700;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: first baseline;
  align-items: center;
  width: 200px;
  height: 120px;

  img {
    max-width: 200px;
    max-height: 120px;
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
  margin-top: 30px;
  margin-left: 10px;
`;

export const PercentageText = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  margin-bottom: 10px;
  text-align: right; /* Right-align the text */
  display: block; /* Ensure the text takes up the full width */
  width: 100%; /* Make sure the text container spans the full width */
`;

export const ArrowIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;
