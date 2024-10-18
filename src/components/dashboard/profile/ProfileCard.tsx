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
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

const ProfileCard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const navigate = useNavigate();
  console.log(user, userData);
  useEffect(() => {
    if (user) {
      const walletAddress = user.wallet_addr;

      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/user/profile/${walletAddress}`);
          setUserData(response.data); // 사용자 데이터 저장
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserData({
            profileImage: 'default-profile.png',
            name: 'Default User',
            expertise: 'Unknown',
            xp: 0, // 백엔드에서 넘어온 cur_xp가 xp로 변환되었는지 확인
            stats: {
              deal: 0,
              discover: 0,
              contribution: 0,
              governance: 0,
            },
          });
        } finally {
          setLoading(false); // 데이터 로드 완료 후 로딩 상태 해제
        }
      };

      fetchUserData();
    } else {
      console.error('User not found in store');
      setLoading(false);
    }
  }, [user]);

  const handleProfileClick = () => {
    navigate('/mainboard/dashboard/profile');
  };

  if (loading) {
    return <div>Loading...</div>; // 로딩 상태 처리
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
          <XP>{formatNumber(userData.xp ?? 0)} XP</XP> {/* XP 출력 */}
        </PointsAndXPWrap>
      </PointsWrap>
      <StatsWrap>
        <Stat>
          <StatItem>Deal</StatItem>
          <StatValue>{formatNumber(userData.stats?.deal ?? 0)}</StatValue>
        </Stat>
        <Stat>
          <StatItem>Discover</StatItem>
          <StatValue>{formatNumber(userData.claimedProjectsCount ?? 0)}</StatValue>
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
