import React, { useState } from 'react';
import axios from 'axios';
import {
  ModalContent,
  ModalHeader,
  CloseButton,
  ConnectedWalletWrapper,
  DisconnectButton,
  ActionButtons,
  CancelButton,
  SignButton,
  Spinner,
  LoadingWrapper,
} from './ConnectedWallet.style';
import { ReactComponent as CloseIcon } from '../../assets/modal/close.svg';
import { ReactComponent as DisconnectIcon } from '../../assets/modal/Vector.svg';
import { ReactComponent as CheckIcon } from '../../assets/modal/check.svg';
import { shortenAddress } from 'src/utils/utils';
import { signMessage } from 'src/utils/web3';
import ErrorMessage from '../errormsg/ErrorMessage'; // 추가된 부분

interface ConnectedWalletProps {
  walletAddress: string;
  onDisconnect: () => void;
  onClose: () => void;
}

const ConnectedWallet: React.FC<ConnectedWalletProps> = ({ walletAddress, onDisconnect, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Waiting for Signature');
  const [verificationFailed, setVerificationFailed] = useState(false);

  const handleSign = async () => {
    try {
      setIsLoading(true);
      const message = 'Please sign this message to confirm you own this wallet';
      const signature = await signMessage(message, walletAddress);

      // 서명 검증
      setLoadingMessage('Verifying Wallet');
      const response = await axios.post('http://localhost:4000/api/wallet/verify-address', {
        address: walletAddress,
        message,
        signature,
      });

      if (response.data.success) {
        alert('Wallet verified successfully');
      } else {
        setVerificationFailed(true); // 추가된 부분
      }
    } catch (error) {
      console.error('Signing error:', error);
      // alert('Failed to verify wallet');
      setVerificationFailed(true);
    } finally {
      setIsLoading(false);
      setLoadingMessage('Waiting for Signature');
    }
  };

  if (verificationFailed) {
    return <ErrorMessage onClose={onClose} />;
  }

  return (
    <ModalContent>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <ModalHeader>
        <h2>Sign in with your wallet</h2>
      </ModalHeader>
      <ConnectedWalletWrapper>
        <div>
          <span
            style={{
              fontSize: '15px',
              color: 'rgba(0, 0, 0, 0.50)',
              fontStyle: 'normal',
              //   lineHeight: '15px',
              fontFamily: 'Inter',
              fontWeight: '400',
            }}
          >
            Connected wallet
          </span>
          <br />
          <span
            style={{ fontSize: '20px', fontWeight: '400', color: '#000', fontStyle: 'normal', lineHeight: 'normal' }}
          >
            {' '}
            {shortenAddress(walletAddress)}
          </span>
        </div>

        <DisconnectButton onClick={onDisconnect}>
          <div>
            <DisconnectIcon />
          </div>
          Disconnect
        </DisconnectButton>
      </ConnectedWalletWrapper>
      {isLoading ? (
        <div
          style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', lineHeight: 'normal', fontWeight: '400' }}
        >
          <LoadingWrapper>
            <Spinner />
            <p>{loadingMessage}</p>
          </LoadingWrapper>
          {loadingMessage === 'Waiting for Signature' && (
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              Your wallet app will prompt you to sign a message to verify your wallet.
            </p>
          )}
        </div>
      ) : (
        <ActionButtons>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SignButton onClick={handleSign}>
            <CheckIcon />
            Sign to Verify
          </SignButton>
        </ActionButtons>
      )}
    </ModalContent>
  );
};

export default ConnectedWallet;