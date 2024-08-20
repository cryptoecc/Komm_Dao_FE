import React, { useState } from 'react';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';
import { GovernanceContainer, GovernanceTitle, GovernanceContent, ConnectWalletWrapper, MainSection, SubSection, NavBar, NavList, } from './index.style';
import { mapActiveIndexToPath, sections } from './variables';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const Governance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate(index: number) {
    if (!location.pathname.includes(mapActiveIndexToPath[index])) {
      setActiveIndex(index);
      navigate(`${location.pathname}/${mapActiveIndexToPath[index]}`);
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
          <Outlet />
        </MainSection>
        <SubSection>
        </SubSection>
      </GovernanceContent>
    </GovernanceContainer>
  );
};

export default Governance;
