import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  WalletDiv,
  WalletBtn,
  ModalContent,
  ModalHeader,
  CloseButton,
  WalletOptions,
  WalletOptionButton,
  WalletOptionButtonContent,
  WalletIconWrapper,
  WalletIcon,
} from './ConnectWallet.style';
import { ReactComponent as CloseIcon } from 'src/assets/modal/close.svg';
import MetamaskIcon from 'src/assets/modal/MetaMask_Fox.png';
import WalletCntIcon from 'src/assets/modal/walletconnect.png';
import ConnectedWallet from '../connectedwallet/ConnectedWallet';
import { connectWallet, switchToOptimism, disconnectWallet, switchToSepolia } from '../../../../../utils/web3';

Modal.setAppElement('#root');

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

interface ConnectWalletProps {
  onComplete: () => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onComplete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsWalletConnected(false);
    setWalletAddress('');
  };

  const handleConnect = async (wallet: string) => {
    // 예시: 실제 지갑 주소를 설정
    if (wallet === 'metamask') {
      try {
        const address = await connectWallet();
        await switchToSepolia();
        setWalletAddress(address);
        setIsWalletConnected(true);
      } catch (error) {
        console.error('Connection Error:', error);
      }
    }

    // const exampleAddress = '0x6c5A...c945';
    // setWalletAddress(exampleAddress);
    // setIsWalletConnected(true);
  };

  const handleDisconnect = async () => {
    try {
      await disconnectWallet();
      setWalletAddress('');
      setIsWalletConnected(false);
    } catch (error) {
      console.error('Disconnection Error:', error);
    }
  };

  return (
    <div>
      {isWalletConnected ? (
        <ConnectedWallet walletAddress={walletAddress} onDisconnect={handleDisconnect} onComplete={onComplete} />
      ) : (
        <ModalContent>
          <WalletOptions>
            <WalletOptionButton onClick={() => handleConnect('metamask')}>
              <WalletOptionButtonContent>MetaMask</WalletOptionButtonContent>
              <WalletIconWrapper>
                <WalletIcon src={MetamaskIcon} alt="MetaMask" />
              </WalletIconWrapper>
            </WalletOptionButton>
            <WalletOptionButton onClick={() => handleConnect('walletconnect')}>
              <WalletOptionButtonContent>Wallet Connect</WalletOptionButtonContent>
              <WalletIconWrapper>
                <WalletIcon src={WalletCntIcon} alt="Wallet" />
              </WalletIconWrapper>
            </WalletOptionButton>
          </WalletOptions>
        </ModalContent>
      )}
    </div>
  );
};

export default ConnectWallet;
