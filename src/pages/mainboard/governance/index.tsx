import React, { useEffect, useState } from 'react';
import {
  GovernanceContainer,
  GovernanceTitle,
  GovernanceContent,
  MainSection,
  SubSection,
  NavBar,
  NavList,
  GoveranaceHeader,
  WalletWrap,
} from './index.style';
import { sections } from './variables';
import Proposals from './proposals';
import Delegates from './delegates';
import Kohort from './kohort';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import Wallet from 'src/components/walletbtn/WalletComponent';

const Governance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
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
  function handleNavigate(index: number) {
    setActiveIndex(index);
  }

  function returnContent() {
    switch (activeIndex) {
      case 0:
        return <Proposals />;
      case 1:
        return <Delegates />;
      case 2:
        return <Kohort />;
    }
  }

  return (
    <GovernanceContainer>
      <GoveranaceHeader>
        <GovernanceTitle>Governance</GovernanceTitle>
        <WalletWrap>
          <Wallet
            address={userData.walletAddress}
            username={userData.name}
            profileImage={userData.profileImage}
            expertise={userData.expertise}
          />
        </WalletWrap>
      </GoveranaceHeader>
      <GovernanceContent>
        <MainSection>
          {/* Navbar */}
          <NavBar>
            {sections.map((el, i) => (
              <NavList active={i === activeIndex} onClick={() => handleNavigate(i)} key={i}>
                {el}
              </NavList>
            ))}
          </NavBar>
          {/* Navbar */}
          {returnContent()}
        </MainSection>
        <SubSection></SubSection>
      </GovernanceContent>
    </GovernanceContainer>
  );
};

export default Governance;
