import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 1920px;

  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  /* margin-top: 20px; */
  padding: 20px 0px 20px 0px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    padding: 5px;
  }
`;

export const DealNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Gap between the logo and the name */
  margin-bottom: 15px;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #fff;
  background-color: #fff;
`;

export const DealNameText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: contain;
  margin-bottom: 20px;
  background-color: #f3efff;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  margin-left: 20px;
  justify-content: flex-end; /* 아이콘을 오른쪽으로 정렬 */

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: flex-end; /* 작은 화면에서도 아이콘을 오른쪽으로 정렬 */
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const DealSummary = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
  line-height: 1.6;
  overflow-y: auto;
  max-width: 650px;
  min-height: 200px;
  margin-top: 20px;
  padding-right: 10px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    max-height: 200px;
    margin-top: 10px;
  }
`;

export const ParticipationCard = styled.div`
  background: #ffffff;
  border: 7px solid #f3efff;
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 10px;
  }
`;

export const ProgressText = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #404040
  align-self: flex-end;
  margin-bottom: 10px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  position: relative;
`;

export const ProgressFill = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #875cff;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

export const DealInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const DealRoundText = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const DealRaisingText = styled.div`
  color: black;
  font-size: 25px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 10px;
  }
`;

export const CountdownText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 400;
  color: #a380f9;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CountdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const CountdownValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  background-color: #f8f8fa;
  color: #404040 @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CountdownLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ParticipateButton = styled.button`
  margin-top: 20px;
  background-color: #875cff;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: flex-start;
    width: 100%;
    font-size: 18px;
    padding: 10px 20px;
  }

  &:hover {
    background-color: #774bcc;
  }

  &:disabled,
  &:disabled:hover {
    background-color: grey !important; /* 비활성화된 버튼의 배경색 */
    cursor: not-allowed !important; /* 커서 모양을 변경 */
  }
`;
