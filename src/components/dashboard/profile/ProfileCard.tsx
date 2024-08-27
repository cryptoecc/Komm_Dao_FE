import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  LevelText,
  PointsAndXPWrap,
  LinkIcon,
  StyledLinkWrap,
} from './ProfileCard.style';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../../../src/utils/utils';
import { images } from '../../../assets/dashboard/images';

const ProfileCard: React.FC = () => {
  const [userData, setUserData] = useState<any>(null); // 사용자 데이터를 상태로 관리
  const navigate = useNavigate();
  const walletAddress = '0x7447B0afa966225937dC1EB842afd40bebe1e03F'; // 실제 사용자의 지갑 주소로 변경

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/user/profile/${walletAddress}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserData({
          profileImage: 'default-profile.png',
          name: 'Stella',
          expertise: 'Developer',
          points: 0,
          xp: 0,
          stats: {
            deal: 0,
            discover: 0,
            contribution: 0,
            governance: 0,
          },
        });
      }
    };

    fetchUserData();
  }, [walletAddress]);

  const handleProfileClick = () => {
    navigate('/mainboard/dashboard/profile');
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileCardContainer>
      <ProfileInfo onClick={handleProfileClick}>
        <ProfileImage src={images.profileDefaultIcon} alt="Profile" />
        {/* <ProfileImage src={`http://localhost:4000/${userData.profileImage}`} alt="Profile" /> */}
        <ProfileName>{userData.name}</ProfileName>
        <ProfileJob>{userData.expertise || 'Job Title'}</ProfileJob>
      </ProfileInfo>
      <PointsWrap>
        <LevelText>Level 1</LevelText>
        <PointsAndXPWrap>
          <Points>
            Points
            <PointsIcon src={images.pointsIcon} alt="Points Icon" />
            <Tooltip>
              Earn points through various activities to unlock rewards. Your total XP will be used for rewards.
            </Tooltip>
          </Points>
          <XP>{formatNumber(userData.xp)} XP</XP>
        </PointsAndXPWrap>
      </PointsWrap>
      <StatsWrap>
        <Stat>
          <StatItem>Deal</StatItem>
          <StatValue>{formatNumber(userData.stats.deal)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Discover</StatItem>
          <StatValue>{formatNumber(userData.stats.discover)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Contribution</StatItem>
          <StatValue>{formatNumber(userData.stats.contribution)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Governance</StatItem>
          <StatValue>{formatNumber(userData.stats.governance)}</StatValue>
        </Stat>
        <StyledLinkWrap>
          <LinkIcon src={images.pointsIcon} alt="Points Icon" />
          <StyledLink to="/mainboard/discover/calendar">Go to My Calendar</StyledLink>
        </StyledLinkWrap>
      </StatsWrap>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
