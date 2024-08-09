// src/components/main/Main.tsx
import React from 'react';
import { ContainerMain, Logo, Text, SubText } from './Main.style';
import MainLogo from '../../assets/dashboard/Logo.png';

const Main: React.FC = () => {
  return (
    <div>
      {/* <ConnectWallet /> */}
      <ContainerMain>
        {/* <ConnectWallet /> */}
        <Logo src={MainLogo} alt="Logo" />
        <Text>KommDAO</Text>
        <SubText>The First Venture DAO in Korea</SubText>
      </ContainerMain>
    </div>
  );
};

export default Main;
