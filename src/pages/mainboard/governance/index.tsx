import React, { useState } from 'react';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';
import { GovernanceContainer, GovernanceTitle, GovernanceContent, ConnectWalletWrapper, MainSection, SubSection, NavBar, NavList } from './index.style';
import { sections } from './variables';

const Governance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <GovernanceContainer>
      <GovernanceTitle>Governance</GovernanceTitle>
      <ConnectWalletWrapper>
        <ConnectWallet />
      </ConnectWalletWrapper>
      <GovernanceContent>
        <MainSection>
          <NavBar>
            {sections.map((el, i) => (
              <NavList active={i === activeIndex} onClick={() => setActiveIndex(i)} key={i}>
                {el}
              </NavList>
            ))}
          </NavBar>
        </MainSection>
        <SubSection>

        </SubSection>
      </GovernanceContent>
    </GovernanceContainer>
  );
};

export default Governance;
