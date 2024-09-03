import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  width: 1080px;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* Add space between ProjectInfo and BannerWrapper */
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* Space below the project title section */
`;

export const ProjectLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px; /* Space between logo and title */
`;

export const ProjectTitle = styled.div`
  width: 100%;
  color: black;
  font-size: 29px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  text-align: left; /* Changed to left-align */
`;

export const KohortLabel = styled.div`
  color: black;
  font-size: 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

export const XPInfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
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
  margin: 10px 0;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;

export const ProgressBar = styled.div`
  width: 460px;
  height: 22px;
  background-color: #e0e0e0;
  border-radius: 20px;
  margin-bottom: 8px; /* Increased margin for better spacing */

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
  width: 100%;
`;

export const BannerWrapper = styled.div`
  width: 420px;
  height: 220px;
  padding: 5px;
  background-color: #f2efff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const BannerImage = styled.img`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;
