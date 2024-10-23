import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  /* position: relative; */
  /* padding: 0px 30px 30px 30px; */
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  max-width: 1920px;
  margin-top: 60px;
  /* margin-bottom: 40px; */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }

  @media (min-width: 1440px) {
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (min-width: 1920px) {
    width: 50%;
  }
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 45px;
  left: -35px;
  /* bottom: 50%; */

  margin-left: 30px;
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
  color: #404040;
  height: 80px;
  font-size: 30px;
  font-weight: 600;
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
  color: #404040;
  font-size: 28px;
  font-weight: 700;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const XPInfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  width: 90%;
  margin-top: 10px;
  justify-content: space-between;

  .total-avg {
    color: #404040;
    font-size: 18px;
    font-weight: 700;
    margin-right: 5px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .xp-value {
    color: #875cff;
    font-size: 24px;
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
  color: #404040;
  font-size: 18px;
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
  background-color: #f0e6ff;
  position: relative;
  border-radius: 20px;
  /* height:22px; */
  width: 90%;
`;

export const ProgressBar = styled.div<{ $progress: number; $maxProgress: number }>`
  width: ${({ $progress, $maxProgress }) => ($progress / $maxProgress) * 100}%;
  height: 25px;
  background-color: #875cff;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProgressText = styled.div`
  color: black;
  font-size: 24px;
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
  max-width: 700px;
  height: 250px; // 높이를 250px로 고정
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
