import styled from 'styled-components';

export const DealCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  /* padding: 5px; */
  /* margin-left: 10px; */
  /* width: 100%; */
  height: 540px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }

  @media (min-width: 1470px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* 1470px 이상에서 최소 400px */
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* 1920px 이상에서 최소 450px */
  }
`;

export const DealItem = styled.div`
  background: #ffffff;
  border: 7px solid #f3efff;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
  height: 540px;
  max-width: 512px;
  position: relative;
  transition: border 0.3s ease, border-radius 0.3s ease;
  overflow: visible;

  &:hover {
    border: 7px solid transparent;
    background: linear-gradient(#ffffff, #ffffff),
      linear-gradient(to right bottom, #ffdede, #6100ff, #00d7f7, #4dff30, #ffe03e, #ff8730, #ff0000);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: 30px;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 130px; /* Set the height to 500px */
  border-radius: 20px;
  overflow: visible;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

export const LogoImage = styled.img`
  position: absolute;
  bottom: -35px;
  left: 20px;
  width: 89px;
  height: 89px;
  border-radius: 20px;
  border: 3px solid #fff;
  background-color: #fff;
`;

export const StatusBadge = styled.div<{ $status: 'Open' | 'Closed' }>`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 28px;
  padding: 5px 11px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  background: ${(props) =>
    props.$status === 'Open'
      ? 'linear-gradient(0deg, #EEEDFD 0%, #EEEDFD 100%)'
      : 'linear-gradient(0deg, #DADADB 0%, #DADADB 100%)'};
  color: ${(props) => (props.$status === 'Open' ? '#6A5FEB' : '#555')};
`;

export const DealTitle = styled.h3`
  padding: 5px;
  font-size: 24px;
  color: #404040;
  font-weight: 600;
  margin-top: 50px;
`;

export const DealDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  height: 170px;
  color: #404040;
  margin: 10px 0;
  /* max-height: 100px; */
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 24px;
  padding: 5px;
  width: 430px;
`;

export const GaugeWrapper = styled.div`
  width: 100%;
  height: 13px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-top: 120px;
`;

export const Gauge = styled.div<{ $percentage: number }>`
  width: ${(props) => props.$percentage}%;
  height: 100%;
  background: #6a5feb;
  transition: width 0.3s ease;
  border-radius: 8px;
`;

export const PercentageText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #404040;
  text-align: right;
  display: block;
  width: 100%;
`;
