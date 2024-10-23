import styled from 'styled-components';

export const DealCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  height: 459px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

export const DealItem = styled.div`
  background: #ffffff;
  border: 7px solid #f3efff;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
  height: 459px;
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
  /* background-color: #f0f0f0; */
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

export const StatusBadge = styled.div<{ status: 'Open' | 'Closed' }>`
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
    props.status === 'Open'
      ? 'linear-gradient(0deg, #F1ECFF 0%, #F1ECFF 100%)'
      : 'linear-gradient(0deg, #DADADB 0%, #DADADB 100%)'};
  color: ${(props) => (props.status === 'Open' ? '#875CFF' : '#555555')};
`;

export const DealTitle = styled.h3`
  padding: 5px;
  font-size: 22px;
  font-weight: 600;
  margin-top: 50px;
`;

export const DealDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  height: 100px;
  color: black;
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
  position: relative;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const Gauge = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #875cff;
  transition: width 0.3s ease;
  border-radius: 8px;
`;

export const PercentageText = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  color: #404040;
  right: 40px;
  bottom: -80px;
  /* float: right; */
  /* width: 100%; */
`;

export const Title = styled.h1`
  color: #1a0737;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

// 타이틀과 TopBar를 감싸는 상단 섹션
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  overflow-y: auto; /* 세로 스크롤이 생기게 합니다 */
  height: 100%;
`;

export const Popup = styled.div`
  position: fixed;
  border-radius: 10px;
  background: #fff;
  color: #404040;
  border: 1px solid #ddd;
  padding: 10px;
  z-index: 10;
  box-shadow: -10px 10px 50px 0px rgba(0, 0, 0, 0.25);
  width: auto;
  max-width: 500px;
  word-wrap: break-word;
  white-space: normal;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  /* transform: translateX(-50%); */
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: -40px;
  right: 30px;
  display: flex;
  gap: 10px;
`;

export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
