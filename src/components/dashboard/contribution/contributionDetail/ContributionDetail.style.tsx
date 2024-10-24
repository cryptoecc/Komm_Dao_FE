import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: #f4efff;
  border-radius: 20px;

  @media (min-width: 1600px) {
    width: 1180px;
    margin: 0 auto;
  }
  /* height: 100%; */
  /* max-height: 1080px; */
  /* margin: 0px auto; */
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ProjectTitle = styled.h1`
  color: #404040;
  font-size: 45px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const LeftSection = styled.div`
  width: 50%;
`;

export const RightSection = styled.div`
  position: relative;
  width: 50%;
  margin-left: 40px; /* 왼쪽 섹션과의 간격 확보 */
`;

export const ActiveBadge = styled.div`
  width: 125px;
  height: 38px;
  /* padding: 17px; */
  background: linear-gradient(0deg, #6a5feb 0%, #6a5feb 100%);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  div {
    color: white;
    font-size: 18px;
    font-weight: 700;
    word-wrap: break-word;
  }
`;

export const FinishedBadge = styled.div`
  width: 100px;
  height: 26px;
  padding: 17px;
  background: linear-gradient(0deg, #939393 0%, #939393 100%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: white;
    font-size: 18px;
    font-weight: 700;
    word-wrap: break-word;
  }
`;

export const ContentWrapper = styled.div`
  border-radius: 30px;
  border: 10px solid #ebe3fe;
  padding: 20px;
  background-color: white;
  /* width: 600px; */
`;

export const Banner = styled.img`
  width: 100%; /* 화면 크기에 맞게 자동으로 설정 */
  /* max-width: 570px; 최대 너비를 설정하여 너무 커지지 않도록 제한 */
  height: auto; /* 높이는 자동으로 설정하여 비율을 유지 */
  border-radius: 20px;
  margin-bottom: 20px;
  object-fit: cover; /* 이미지가 공간에 맞게 조정되도록 설정 */
`;

export const RewardSection = styled.div`
  color: #404040;
  font-size: 24px;
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border-bottom: 2px #6a5feb solid;

  span {
    color: #6a5feb;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const MissionSection = styled.div`
  color: #404040;
  font-size: 18px;
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 20px;
  padding: 10px;
  max-height: 200px;
  overflow-y: scroll;

  p {
    color: #404040;
    font-size: 16px;
    font-weight: 400;
    word-wrap: break-word;
    line-height: 1.5;
    margin-top: 10px;
  }
`;

export const DateSection = styled.div`
  color: #404040;
  font-size: 17px;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 20px;
  padding: 10px;

  h4 {
    color: #404040;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const TaskWrapper = styled.div`
  border-radius: 20px;
  border: 10px #ebe3fe solid;
  padding: 20px;
  background-color: white;
`;

export const TaskSection = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 20px 0px;
    border-radius: 12px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
`;

export const ActionButton = styled.button`
  background-color: #875cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #6e40cc;
  }

  align-self: flex-end; /* 오른쪽 수직 정렬 */
  margin-left: auto; /* 버튼이 수평으로 오른쪽에 붙도록 함 */
`;

export const ParticipantSection = styled.div`
  margin-top: 30px;
  padding: 10px;

  h4 {
    color: #6a5feb;
    font-size: 20px; /* 폰트 크기 */
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
    display: inline-block; /* 텍스트 너비에 맞게 설정 */
    position: relative;

    /* 하단 선을 추가 */
    &::after {
      content: '';
      display: block;
      width: 100%; /* 텍스트 너비에 맞춰 선을 그음 */
      height: 2px; /* 선의 두께 */
      background-color: #d3d3d3; /* 선의 색상 */
      margin-top: 5px; /* 텍스트와 선 사이 간격 */
    }
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 15px; /* 기존 10px에서 15px으로 높이 증가 */
  background-color: white;
  border-radius: 5px;
  margin: 18px 0px 40px 0px;
  position: relative;
`;

export const ProgressBar = styled.div<{ $progress: number; $maxProgress: number }>`
  width: ${({ $progress, $maxProgress }) => ($progress / $maxProgress) * 100}%;
  height: 100%;
  background-color: #6a5feb;
  border-radius: 10px;
`;

export const ProgressText = styled.div`
  font-size: 15px; /* 기존 14px에서 16px으로 폰트 크기 증가 */
  color: #404040;
  font-weight: 500;
  margin-bottom: 20px; /* 기존 10px에서 20px으로 변경 */
  padding-top: 5px; /* 텍스트와 위 요소 간의 간격 확보 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

export const AvatarList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Avatar = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #404040;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ClaimButton = styled.button`
  position: absolute;
  background-color: #6a5feb;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 111%;
  left: 82%;
  /* margin-left: auto; */
  width: 140px; /* 버튼 너비 설정 */

  &:hover {
    background-color: #564dba;
  }

  &:disabled {
    background-color: #d9d9d9; /* 비활성화 상태일 때 배경색 */
    color: #a0a0a0; /* 비활성화 상태일 때 텍스트 색상 */
    cursor: not-allowed; /* 비활성화 상태일 때 커서 모양 */
  }
`;

export const ClaimButtonText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const InviteSection = styled.div`
  /* display: flex; */
  align-items: center;
  /* justify-content: space-between; */
  /* padding: 20px; */
  /* margin: 20px 0; */

  width: 100%;
  height: 100px;

  h3 {
    color: #404040;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    width: 220px;
    color: #404040;
    margin-top: 10px;
    margin-left: 30px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const InviteIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const InviteButton = styled.button`
  background: var(--Purple-900, #6a5feb);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 30px;
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
  margin-top: 12px;
  height: 45px;
  cursor: pointer;
  /* position: relative; */
  /* top: 40px; */
  /* right: 30px; */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #564dba;
  }
  float: right;
  /* align-self: flex-end; 오른쪽 수직 정렬 */
  /* margin-left: auto; 버튼이 수평으로 오른쪽에 붙도록 함 */
`;

export const ActionButtons = styled.button`
  background-color: #875cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #6e40cc;
  }

  align-self: flex-end; /* 오른쪽 수직 정렬 */
  margin-left: auto; /* 버튼이 수평으로 오른쪽에 붙도록 함 */
`;

export const DailyCheckWrapper = styled.div`
  /* align-items: center; */
  height: 100px;
  padding: 10px;
  background-color: white;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #404040;
    margin-top: 10px;
  }
`;

export const DailyCheckButton = styled.button`
  background-color: #6a5feb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  align-items: end;
  float: right;

  &:hover {
    background-color: #564dba;
  }
`;

export const DailyIcon = styled.img`
  width: 50px;
  height: 50px;
`;
