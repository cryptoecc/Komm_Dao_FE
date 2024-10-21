import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import DealDetails from 'src/components/dashboard/deal/dealDtails/DealDetails';
import { useNavigate } from 'react-router-dom';
import Wallet from 'src/components/walletbtn/WalletComponent';
import { API_BASE_URL } from 'src/utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import axios from 'axios';
import { ReactComponent as ArrowIcon } from 'src/assets/deal/arrow_back.svg';

const PageContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  margin-left: 70px;
  margin-right: 70px;

  @media (min-width: 1600px) {
    margin-left: 210px;
    margin-right: 210px;
  }
`;
const WalletWrap = styled.div`
  /* position: absolute; */
  margin-right: 60px;
  text-align: right;
  /* float: right; */
`;

const BackButton = styled.div`
  display: flex;
  height: 20px;
  gap: 15px;
  width: 180px;
  /* float: left; */
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  font-size: 20px;
  /* margin-bottom: 20px; Title 아래에 위치하도록 조정 */
`;

const BackLink = styled.div`
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;

  span {
    margin-right: 10px; /* 아이콘과 텍스트 사이의 간격 */
  }
`;

const DealDtailsPage: React.FC = () => {
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

  if (loading || !userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }
  return (
    <PageContainer>
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
      <DealDetails />
    </PageContainer>
  );
};

export default DealDtailsPage;
