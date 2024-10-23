import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContributionDetail from 'src/components/dashboard/contribution/contributionDetail/ContributionDetail';
import Wallet from 'src/components/walletbtn/WalletComponent';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import backArrow from 'src/assets/contribution/arrow_back.svg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 40px 10px; */
  height: 100%;
  margin: 0 auto;
  /* padding: 30px; */
  /* max-height: 1080px; */
  /* max-width: 1920px; */
  @media (min-width: 1600px) {
    width: 1180px;
    /* margin-left: 150px;
    margin-right: 150px; */
    /* height: 700px; */
  }
`;
const WalletWrap = styled.div`
  /* float: right; */
  text-align: end;
  margin-right: 60px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #a380f9;
  font-weight: 700;
  margin-bottom: 20px; /* Title 아래에 위치하도록 조정 */
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #a380f9;
  font-weight: 700;
  font-size: 18px;
  /* padding-left: 60px; */
  img {
    width: 18px;
    height: 18px;
    margin-right: 10px; /* 아이콘과 텍스트 사이의 간격 */
  }
`;

const DealDtailsPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user); // 사용자 정보 가져오기
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // user 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const walletAddress = user.wallet_addr;
          console.log(walletAddress);
          const response = await axios.get(`${API_BASE_URL}/api/user/profile/${walletAddress}`);
          console.log(response.data);
          setUserData(response.data);
          setLoading(false);
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
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [user]); // user 값이 변경될 때마다 useEffect 실행
  if (loading || !userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }

  return (
    <PageContainer>
      <WalletWrap>
        <Wallet
          address={userData.walletAddress}
          username={userData.name}
          profileImage={userData.profileImage}
          expertise={userData.expertise}
        />
      </WalletWrap>
      <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <img src={backArrow} alt="Back Arrow" /> {/* 이미지로 대체 */}Back to Contribution
        </BackLink>
      </BackButton>

      <ContributionDetail />
    </PageContainer>
  );
};

export default DealDtailsPage;
