import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DiscoverDetail from 'src/components/dashboard/discover/discoverDetails/DiscoverDetail';
import DiscoverParticipantList from 'src/components/dashboard/discover/discoverDetails/DiscoverParticipantList';
import CommunityRating from 'src/components/dashboard/discover/discoverDetails/CommunityRating';
import styled from 'styled-components';
import { images } from 'src/assets/discover/images';
import { API_BASE_URL } from 'src/utils/utils';
import axios from 'axios';
import Wallet from 'src/components/walletbtn/WalletComponent';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { ReactComponent as ArrowIcon } from 'src/assets/deal/arrow_back.svg';

interface Participant {
  id: number;
  user: string;
}

const DiscoverContainer = styled.div`
  padding: 20px;
  max-width: 1920px;
  margin-left: 100px;
  margin-right: 100px;
  /* height: 100vh; */
  align-items: center;

  @media (min-width: 1600px) {
    margin-top: 100px;
    /* margin-bottom: 70px; */
  }
`;

const DiscoverContent = styled.div`
  padding: 20px;
  margin-top: 30px;
`;
const WalletWrap = styled.div`
  margin-right: 60px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-bottom: 20px;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;

  span {
    margin-right: 10px;
  }
`;

const DiscoverDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const projectData = location.state;
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [percentile, setPercentile] = useState<number>(0);
  const [userData, setUserData] = useState<any>(null);
  const user = useSelector((state: RootState) => state.user);

  const fetchProjectData = async () => {
    try {
      const pjtId = projectData.pjt_id;
      const response = await axios.get(`${API_BASE_URL}/api/project/${pjtId}/details`);
      const projectDetails = response.data;

      // rating 값을 설정
      setRating(projectDetails.project.avg_rating || 0);

      // 백엔드에서 받은 percentile 값을 처리
      const parsedPercentile = projectDetails.project.percentile
        ? parseFloat(projectDetails.project.percentile) // "20.00"을 20으로 변환
        : 0; // 값이 없을 경우 기본값 0 설정

      setPercentile(parsedPercentile);

      // 참가자 목록 설정
      setParticipants(
        projectDetails.participants.map((participant: any, index: number) => ({
          id: index + 1,
          user: participant.user_image_link || images.user,
        }))
      );
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  const fetchUserData = async () => {
    if (user && user.wallet_addr) {
      // user와 wallet_addr이 있는지 확인
      try {
        const walletAddress = user.wallet_addr;
        console.log(walletAddress);
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
    }
  };

  useEffect(() => {
    fetchProjectData();
    fetchUserData();
  }, [projectData, user]);

  const handleXpClaimed = () => {
    // XP 클레임 후 데이터를 다시 가져옴
    fetchProjectData();
  };

  if (!user || !userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }
  return (
    <DiscoverContainer>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowIcon />
          Back to Deal
        </BackButton>
        <WalletWrap>
          <Wallet
            address={userData.walletAddress}
            username={userData.name}
            profileImage={userData.profileImage}
            expertise={userData.expertise}
          />
        </WalletWrap>
      </div>
      <DiscoverContent>
        <DiscoverDetail />
        <CommunityRating rating={rating} percentile={percentile} />
        <DiscoverParticipantList participants={participants} onXpClaimed={handleXpClaimed} />
      </DiscoverContent>
    </DiscoverContainer>
  );
};

export default DiscoverDetails;
