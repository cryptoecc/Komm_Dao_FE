// src/pages/main/index.tsx
import React from 'react';
import Main from '../../components/main/Main';
import { Container } from '../../style/layout';
import ConnectWallet from 'src/components/walletbtn/ConnectWallet';

const MainPage: React.FC = () => {
  return (
    <div>
      <ConnectWallet />
      <Main />
    </div>
  );
};

export default MainPage;
