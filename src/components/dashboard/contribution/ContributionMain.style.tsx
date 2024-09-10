import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const RightSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ProjectLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
`;

export const ProjectTitle = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const KohortLabel = styled.div`
  color: black;
  font-size: 32px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const XPInfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  width: 80%;
  margin-top: 10px;
  justify-content: space-between;

  .total-avg {
    color: black;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    margin-right: 5px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .xp-value {
    color: #875cff;
    font-size: 28px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-decoration: underline;
    margin-left: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const XPInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Dates = styled.div`
  color: black;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  margin: 30px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 20px 0;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  width: 100%;
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 22px;
  background-color: #e0e0e0;
  border-radius: 20px;
  margin-bottom: 8px;

  .progress {
    height: 100%;
    background-color: #875cff;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProgressText = styled.div`
  color: black;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
  width: 80%;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 250px; // 높이를 250px로 고정
  padding: 5px;
  background-color: #f2efff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 250px; // 높이를 250px로 고정
  border-radius: 20px;
  object-fit: contain; // 이미지 비율을 유지하면서 짤림 없이 표시
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px; // 작은 화면에서도 높이를 고정
  }
`;
