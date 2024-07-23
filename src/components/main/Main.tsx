// src/components/main/Main.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import { Container } from '../../style/layout';
import { ContainerMain, Logo, Text, SubText } from './Main.style';
import ConnectWallet from '../walletbtn/ConnectWallet';

const Main: React.FC = () => {
  return (
    <div>
      {/* <ConnectWallet /> */}
      <ContainerMain>
        {/* <ConnectWallet /> */}
        <Logo src="/assets/images/Logo.png" alt="Logo" />
        <Text>KommDAO</Text>
        <SubText>The First Venture DAO in Korea</SubText>
      </ContainerMain>
    </div>
  );
};

export default Main;
