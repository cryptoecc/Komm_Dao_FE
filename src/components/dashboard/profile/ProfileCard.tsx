import React from 'react';
import {
  ProfileCardContainer,
  ProfileInfo,
  ProfileImage,
  ProfileName,
  ProfileJob,
  PointsWrap,
  Points,
  XP,
  PointsIcon,
  StatsWrap,
  Stat,
  StatItem,
  StatValue,
} from './ProfileCard.style';

const ProfileCard: React.FC = () => {
  return (
    <ProfileCardContainer>
      <ProfileInfo>
        <ProfileImage src="/assets/images/profile_default.png" alt="Profile" />
        <ProfileName>Stella</ProfileName>
        <ProfileJob>Marketer</ProfileJob>
      </ProfileInfo>
      <PointsWrap>
        <Points>
          Points
          <PointsIcon src="/assets/images/error.png" alt="Points Icon" />
        </Points>
        <XP>2,550 XP</XP>
      </PointsWrap>
      <StatsWrap>
        <StatsWrap>
          <Stat>
            <StatItem>Deal</StatItem>
            <StatValue>2</StatValue>
          </Stat>
          <Stat>
            <StatItem>Contribution</StatItem>
            <StatValue>2</StatValue>
          </Stat>
          <Stat>
            <StatItem>Governance</StatItem>
            <StatValue>4</StatValue>
          </Stat>
        </StatsWrap>
      </StatsWrap>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
