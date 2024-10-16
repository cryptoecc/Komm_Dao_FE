import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileCard from '../../../components/dashboard/profile/ProfileCard';
import UserStats from 'src/components/dashboard/userstats';
import Wallet from 'src/components/walletbtn/WalletComponent';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  max-width: 1920px;
  max-height: 1080px;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const DashboardTitle = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const WalletWrap = styled.div`
  margin-right: 60px;
`;

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.wallet_addr) {
        try {
          const walletAddress = user.wallet_addr;
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
        } finally {
          setIsLoading(false); // 로딩 완료
        }
      } else {
        setIsLoading(false); // user 또는 wallet_addr이 없으면 로딩 완료
      }
    };

    fetchUserData();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>; // 데이터 로딩 중에 표시
  }

  if (!user || !userData) {
    return <div>No user data available</div>; // user 또는 userData가 없을 때 처리
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
        <WalletWrap>
          <Wallet
            address={userData.walletAddress || 'N/A'}
            username={userData.name || 'Unknown'}
            profileImage={userData.profileImage || 'default-profile.png'}
            expertise={userData.expertise || 'Unknown'}
          />
        </WalletWrap>
      </DashboardHeader>
      <ProfileCard />
      <UserStats />
    </DashboardContainer>
  );
};

export default Dashboard;
