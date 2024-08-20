import React, { useState } from 'react';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';
import { GovernanceContainer, GovernanceTitle, GovernanceContent, ConnectWalletWrapper, MainSection, SubSection, NavBar, NavList, } from './index.style';
import { mapActiveIndexToPath, sections } from './variables';
import { useNavigate, Outlet } from 'react-router-dom';

const Governance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();

  function handleNavigate(index: number) {
    setActiveIndex(index);
    navigate(`${mapActiveIndexToPath[index]}`);
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
          <Outlet />
        </MainSection>
        <SubSection>
        </SubSection>
      </GovernanceContent>
    </GovernanceContainer>
  );
};

export default Governance;
