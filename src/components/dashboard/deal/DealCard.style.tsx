import styled from 'styled-components';

export const DealItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border: 7px solid #f9f9f9;
  border-radius: 30px;
  padding: 20px;
  width: 512px;
  position: relative;
  transition: border-radius 0.3s ease, border-image 0.3s ease; /* Add smooth transition */

  &:hover {
    border-radius: 30px; /* Change border-radius on hover */
    border-image: linear-gradient(
        to right bottom,
        #ffdede 0%,
        #6100ff 53.5%,
        #00d7f7 58.61%,
        #4dff30 64.5%,
        #ffe03e 75.5%,
        #ff8730 85.5%,
        #ff0000 100%
      )
      1;
  }
`;

export const DealHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const Gauge = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #875cff;
  transition: width 0.3s ease;
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

export const PercentageText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #000;
  margin-top: 5px;
  margin-left: auto;
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
