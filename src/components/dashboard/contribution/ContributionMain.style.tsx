import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%; /* Left section takes 70% of the width */
  margin-right: 20px; /* Space between LeftSection and RightSection */
`;

export const RightSection = styled.div`
  width: 40%; /* Right section takes 30% of the width */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProjectLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
`;

export const ProjectTitle = styled.div`
  color: black;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  text-align: left;
  overflow: hidden; /* 넘치는 부분을 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분을 "..."로 표시 */
`;

export const KohortLabel = styled.div`
  color: black;
  font-size: 32px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
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
  }

  .xp-value {
    color: #875cff;
    font-size: 28px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    text-decoration: underline;
    margin-left: 20px;
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
`;

export const ProgressText = styled.div`
  color: black;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
  width: 80%;
`;

export const BannerWrapper = styled.div`
  width: 420px;
  height: 250px;
  padding: 5px;
  background-color: #f2efff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 30px;
  object-fit: cover;
`;

export const BannerImage = styled.img`
  width: 400px;
  height: 220px;
  border-radius: 20px;
  object-fit: cover;
`;
