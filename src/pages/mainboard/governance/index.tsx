import React, { useState } from 'react';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';
import { GovernanceContainer, GovernanceTitle, GovernanceContent, ConnectWalletWrapper, MainSection, SubSection, NavBar, NavList, } from './index.style';
import { sections } from './variables';
import Proposals from './proposals';
import Delegates from './delegates';
import Kohort from './kohort';

const Governance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNavigate(index: number) {
    setActiveIndex(index);
  }

  function returnContent() {
    switch (activeIndex) {
      case 0:
        return <Proposals />
      case 1:
        return <Delegates />
      case 2:
        return <Kohort />
    }
  }

  return (
    <GovernanceContainer>
      <GovernanceTitle>Governance</GovernanceTitle>
      <ConnectWalletWrapper>
        <ConnectWallet />
      </ConnectWalletWrapper>
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
          {/* <Outlet /> */}
          {returnContent()}
        </MainSection>
        <SubSection>
        </SubSection>
      </GovernanceContent>
    </GovernanceContainer>
  );
};

export default Governance;
