import React, { useState, useEffect } from 'react';
import { Container, Text, SubText, WalletContainer } from './addWallet.style';
import ConnectWallet from 'src/components/register/step/addWallet/walletbtn/ConnectWallet';
import { logoutUser } from 'src/store/user/UserSlice';
import { persistor } from 'src/store/store';
import { useDispatch } from 'react-redux';
interface StepProps {
  onComplete: () => void;
}

const AddWallet: React.FC<StepProps> = ({ onComplete }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const dispatch = useDispatch();

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    persistor.purge();
    localStorage.removeItem('persist:root');
  };

  useEffect(() => {
    console.log('됨');
    handleLogout();
  }, []);

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
