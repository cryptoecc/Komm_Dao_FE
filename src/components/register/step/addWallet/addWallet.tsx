import React, { useState } from 'react';
import { Container, Text, SubText, WalletContainer } from './addWallet.style';
import ConnectWallet from 'src/components/register/step/addWallet/walletbtn/ConnectWallet';

interface StepProps {
  onComplete: () => void;
}

const AddWallet: React.FC<StepProps> = ({ onComplete }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
  };

  return (
    <Container>
      <Text>You've been invited to join Komm DAO</Text>
      <br />
      <SubText>Please connect your wallet to continue</SubText>
      {isWalletConnected ? (
        <ConnectWallet onComplete={onComplete} />
      ) : (
        <WalletContainer>
          <button onClick={handleWalletConnect}>Connect Wallet</button>
        </WalletContainer>
      )}
    </Container>
  );
};

export default AddWallet;
