import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import DealInterestCard from '../../../../../components/dashboard/deal/dealInterest/DealInterestCard';
import { ReactComponent as ArrowIcon } from 'src/assets/deal/arrow_back.svg';
import Wallet from 'src/components/walletbtn/WalletComponent';
import { API_BASE_URL } from 'src/utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import axios from 'axios';

const PageContainer = styled.div`
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  height: 100vh;
`;

const BackButton = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  color: #6a5feb;
  font-weight: 500;
`;

const WalletWrap = styled.div`
  /* position: absolute; */
  margin-right: 60px;
  text-align: right;
  /* float: right; */
`;

const DealInterestPage: React.FC = () => {
  const navigate = useNavigate();
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const deal = location.state?.deal; // DealDetails에서 넘겨준 deal 데이터를 받아옵니다.
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

  if (loading || !userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }
  return (
    <PageContainer>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '30px' }}>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowIcon />
          Back to Deal Description
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
      {deal ? <DealInterestCard deal={deal} /> : <div>No deal data available.</div>}
    </PageContainer>
  );
};

export default DealInterestPage;
