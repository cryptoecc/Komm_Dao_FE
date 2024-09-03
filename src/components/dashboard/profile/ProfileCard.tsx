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
import { API_BASE_URL } from '../../../../src/utils/utils';

const ProfileCard: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const persistedRoot = localStorage.getItem('persist:root');

    if (persistedRoot) {
      try {
        const parsedData = JSON.parse(persistedRoot);
        const walletAddress = JSON.parse(parsedData.wallet_addr);

        const fetchUserData = async () => {
          try {
            const response = await axios.get(`${API_BASE_URL}/api/user/profile/${walletAddress}`);
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
            setUserData({
              profileImage: 'default-profile.png',
              name: 'Default User',
              expertise: 'Unknown',
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
      } catch (error) {
        console.error('Error parsing persisted root data:', error);
      }
    } else {
      console.error('persist:root not found in localStorage');
    }
  }, []);

  const handleProfileClick = () => {
    navigate('/mainboard/dashboard/profile');
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileCardContainer>
      <ProfileInfo onClick={handleProfileClick}>
        <ProfileImage
          src={userData.profileImage ? `${API_BASE_URL}/${userData.profileImage}` : images.profileDefaultIcon}
          alt="Profile"
        />
        <ProfileName>{userData.name || 'Default User'}</ProfileName>
        <ProfileJob>{userData.expertise || 'Unknown'}</ProfileJob>
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
          <XP>{formatNumber(userData.xp ?? 0)} XP</XP>
        </PointsAndXPWrap>
      </PointsWrap>
      <StatsWrap>
        <Stat>
          <StatItem>Deal</StatItem>
          <StatValue>{formatNumber(userData.stats?.deal ?? 0)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Discover</StatItem>
          <StatValue>{formatNumber(userData.stats?.discover ?? 0)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Contribution</StatItem>
          <StatValue>{formatNumber(userData.stats?.contribution ?? 0)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Governance</StatItem>
          <StatValue>{formatNumber(userData.stats?.governance ?? 0)}</StatValue>
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
