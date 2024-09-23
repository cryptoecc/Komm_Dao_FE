import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DealList from '../../../components/dashboard/deal/DealList';
import { API_BASE_URL } from 'src/utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store'; // RootState 경로는 프로젝트에 따라 조정 필요
import Wallet from 'src/components/walletbtn/WalletComponent';

const PageContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  max-width: 1920px;
`;

const DealdHeader = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝으로 배치 */
  align-items: center; /* 수직 중앙 정렬 */
  margin-bottom: 20px;
`;

const WalletWrap = styled.div`
  margin-right: 60px;
`;

const Title = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const DealPage: React.FC = () => {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user); // 사용자 정보 가져오기
  const [userData, setUserData] = useState<any>(null);

  // user 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.wallet_addr) {
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

    fetchUserData();
  }, [user]); // user 값이 변경될 때마다 useEffect 실행

  // deal 데이터를 가져오는 useEffect
  useEffect(() => {
    if (!user || !user.user_id) {
      // 사용자가 인증되지 않은 경우 로그인 페이지로 리다이렉트
      navigate('/'); // 로그인 페이지의 경로를 조정하세요
    } else {
      const fetchDeals = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/deals`);
          setDeals(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching deals:', error);
          setLoading(false);
        }
      };
      fetchDeals();
    }
  }, [user, navigate]);

  const handleDealClick = (deal: any) => {
    navigate(`/mainboard/deal/${deal.deal_id}`, { state: { deal } });
  };

  if (loading || !userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }

  return (
    <>
      <PageContainer>
        <DealdHeader>
          <Title>Deal</Title>
          <WalletWrap>
            <Wallet
              address={userData.walletAddress}
              username={userData.name}
              profileImage={userData.profileImage}
              expertise={userData.expertise}
            />
          </WalletWrap>
        </DealdHeader>

        <DealList deals={deals} onDealClick={handleDealClick} />
      </PageContainer>
    </>
  );
};

export default DealPage;
