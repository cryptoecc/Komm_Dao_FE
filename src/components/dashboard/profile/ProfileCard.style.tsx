import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: auto; /* 높이를 자동으로 조정 */
  display: flex;
  flex-direction: column; /* 기본적으로 세로 레이아웃 */
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  border: 7px solid #f9f9f9;

  @media (min-width: 768px) {
    flex-direction: row; /* 화면이 넓을 때는 가로 레이아웃으로 변경 */
    justify-content: space-around;
  }
`;

export const ProfileInfo = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 15%;
    align-items: center; /* 넓은 화면에서는 왼쪽 정렬 */
  }
`;

export const ProfileImage = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 50px;

  @media (max-width: 768px) {
    width: 90px; /* 작은 화면에서는 이미지 크기 축소 */
    height: 80px;
    margin-top: 10px;
    border-radius: 50px;
  }
`;

export const ProfileName = styled.div`
  margin-top: 5px;
  color: #000;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px; /* 작은 화면에서는 텍스트 크기 축소 */
    align-items: center; /* 넓은 화면에서는 왼쪽 정렬 */
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    align-items: center; /* 넓은 화면에서는 왼쪽 정렬 */
    font-size: 16px; /* 더 작은 화면에서는 텍스트 크기 추가로 축소 */
    margin-top: 10px;
  }
`;

export const ProfileJob = styled.div`
  color: #6926d7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px; /* 작은 화면에서는 텍스트 크기 축소 */
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px; /* 더 작은 화면에서는 텍스트 크기 추가로 축소 */
    margin-top: 10px;
  }
`;

export const PointsWrap = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬로 변경 */
  margin: 20px 0;
  position: relative;

  @media (min-width: 768px) {
    width: 30%;
    margin: 0;
    align-items: flex-start; /* 큰 화면에서도 왼쪽 정렬 유지 */
  }
`;

export const LevelText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
  color: black;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const PointsAndXPWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Points와 XP 사이의 간격을 최대화 */
  gap: 30px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Points = styled.div`
  color: #6926d7;
  font-family: Inter;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const PointsIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 5px;
  flex-shrink: 0;
  cursor: pointer; /* 아이콘에 커서 포인터 추가 */

  &:hover + div {
    opacity: 1;
    visibility: visible;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 100%; /* Points 아이콘 아래에 위치하도록 설정 */
  left: 50%;
  transform: translateX(-50%);
  width: 230px;
  height: 80px;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  font-family: Inter;
  color: #000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 10;
  border-radius: 20px;
  background: #f3ecff;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const XP = styled.div`
  color: #6926d7;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const StatsWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* 전체 너비 사용 */

  @media (min-width: 768px) {
    width: 70%; /* 너비 자동 조정 */
  }
`;

export const StatItem = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; /* 159.091% */
  text-align: left; /* 왼쪽 정렬 */

  @media (max-width: 768px) {
    font-size: 16px; /* 작은 화면에서는 텍스트 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* 더 작은 화면에서는 텍스트 크기 추가로 축소 */
  }
`;

export const StatValue = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 16px; /* 작은 화면에서는 텍스트 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 13px; /* 더 작은 화면에서는 텍스트 크기 추가로 축소 */
  }
`;

export const StyledLinkWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  align-items: center;
  color: #875cff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px; /* 작은 화면에서는 텍스트 크기 축소 */
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px; /* 더 작은 화면에서는 텍스트 크기 추가로 축소 */
    margin-top: 10px;
  }
`;

export const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-top: 10px;
`;
