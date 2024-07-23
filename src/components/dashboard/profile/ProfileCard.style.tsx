import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: 281px;
  border-radius: 30px;
  border-right: 7px solid #f9f9f9;
  background: rgba(227, 217, 255, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const ProfileInfo = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 111px;
  flex-shrink: 0;
`;

export const ProfileName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProfileJob = styled.div`
  color: #6926d7;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PointsWrap = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Points = styled.div`
  color: #6926d7;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PointsIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const XP = styled.div`
  color: #6926d7;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StatsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-items: first baseline;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StatItem = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
`;

export const StatValue = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 50px;
  text-align: right;
`;
