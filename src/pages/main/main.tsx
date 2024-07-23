// src/pages/main/index.tsx
import React from 'react';
import Main from '../../components/main/Main';
import ConnectWallet from 'src/components/walletbtn/ConnectWallet';
import { WalletDiv } from './main.style';

const MainPage: React.FC = () => {
  return (
    <div>
      <WalletDiv>
        <ConnectWallet />
      </WalletDiv>
      <Main />
    </div>
  );
};

export default MainPage;
