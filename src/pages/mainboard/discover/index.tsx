import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from 'src/components/dashboard/discover/SearchBar';
import { CalendarButton } from 'src/components/dashboard/discover/SearchBar.style';
import CalendarIcon from '../../../assets/discover/calendar_btn.png';
import styled from 'styled-components';
import DiscoverList from 'src/components/dashboard/discover/DiscoverList';
import { PATH } from 'src/constants/path'; // Import the PATH constants
import Wallet from 'src/components/walletbtn/WalletComponent';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';

const DiscoverContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

const DiscoverdHeader = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝으로 배치 */
  align-items: center; /* 수직 중앙 정렬 */
  margin-bottom: 20px;
`;

const WalletWrap = styled.div`
  margin-right: 60px;
`;

const DiscoverTitle = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const DiscoverContent = styled.div``;

const TopContents = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Discover: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  useEffect(() => {
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

    fetchUserData();
  }, [user]); // user 값이 변경될 때마다 useEffect 실행

  if (!user || !userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }
  const handleCalendarClick = () => {
    navigate(PATH.DISCOVER_CALENDAR); // Navigate to the calendar page
  };

  return (
    <DiscoverContainer>
      <DiscoverdHeader>
        <DiscoverTitle>Discover</DiscoverTitle>
        <WalletWrap>
          <Wallet
            address={userData.walletAddress}
            username={userData.name}
            profileImage={userData.profileImage}
            expertise={userData.expertise}
          />
        </WalletWrap>
      </DiscoverdHeader>

      <DiscoverContent>
        <TopContents>
          <SearchBar />
          <CalendarButton onClick={handleCalendarClick}>
            <img src={CalendarIcon} alt="Calendar icon" />
            My Calendar
          </CalendarButton>
        </TopContents>
        <DiscoverList />
      </DiscoverContent>
    </DiscoverContainer>
  );
};

export default Discover;
