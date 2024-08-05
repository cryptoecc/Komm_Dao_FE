// src/pages/dashboard/ProfileCard.tsx
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
  Tooltip,
  StatsWrap,
  Stat,
  StatItem,
  StatValue,
  StyledLink,
} from './ProfileCard.style';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../../../src/utils/utils';
import { images } from '../../../assets/dashboard/images';

const ProfileCard: React.FC = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/mainboard/dashboard/profile');
  };

  // 예시 데이터, 실제로는 backend에서 받아온 데이터로 대체됨
  const stats = {
    points: 22250,
    deal: 2,
    discover: 4,
    contribution: 2,
    governance: 4,
  };

  return (
    <ProfileCardContainer>
      <ProfileInfo onClick={handleProfileClick}>
        <ProfileImage src={images.profileDefaultIcon} alt="Profile" />
        <ProfileName>Stella</ProfileName>
        <ProfileJob>Marketer</ProfileJob>
      </ProfileInfo>
      <PointsWrap>
        <Points>
          Points
          <PointsIcon src={images.pointsIcon} alt="Points Icon" />
          <Tooltip>
            Earn points through various activities to unlock rewards. Your total XP will be used for rewards.
          </Tooltip>
        </Points>
        <XP>{formatNumber(stats.points)}XP</XP>
      </PointsWrap>
      <StatsWrap>
        <Stat>
          <StatItem>Deal</StatItem>
          <StatValue>{formatNumber(stats.deal)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Discover</StatItem>
          <StatValue>{formatNumber(stats.discover)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Contribution</StatItem>
          <StatValue>{formatNumber(stats.contribution)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Governance</StatItem>
          <StatValue>{formatNumber(stats.governance)}</StatValue>
        </Stat>
        {/* 추가된 링크 */}
        <StyledLink to="/some-path">Go to My Calendar</StyledLink>
      </StatsWrap>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
