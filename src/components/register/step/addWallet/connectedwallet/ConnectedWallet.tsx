import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connectWallet, disconnectWallet } from 'src/store/user/UserSlice';
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
// import { ReactComponent as CloseIcon } from 'src/assets/modal/close.svg';
import { ReactComponent as DisconnectIcon } from 'src/assets/modal/Vector.svg';
import { ReactComponent as CheckIcon } from 'src/assets/modal/check.svg';
import { shortenAddress } from 'src/utils/utils';
import { signMessage } from 'src/utils/web3';
import ErrorMessage from '../../../../errormsg/ErrorMessage'; // 추가된 부분
import { API_BASE_URL } from 'src/utils/utils';

interface ConnectedWalletProps {
  walletAddress: string;
  onDisconnect: () => void;
  onComplete: () => void;
  // onClose: () => void;
}

const ConnectedWallet: React.FC<ConnectedWalletProps> = ({ walletAddress, onDisconnect, onComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Waiting for Signature');
  const [verificationFailed, setVerificationFailed] = useState(false);
  const dispatch = useDispatch();

  const handleSign = async () => {
    try {
      setIsLoading(true);
      const message = 'Please sign this message to confirm you own this wallet';
      const signature = await signMessage(message, walletAddress);

      // 서명 검증
      setLoadingMessage('Verifying Wallet');
      const response = await axios.post(`${API_BASE_URL}/api/wallet/check-wallet`, {
        address: walletAddress,
        message,
        signature,
      });

      if (response.data.success) {
        dispatch(connectWallet(walletAddress));
        alert('Wallet connected successfully');
        onComplete();
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

  // if (verificationFailed) {
  //   return <ErrorMessage onClose={onClose} />;
  // }

  return (
    <ModalContent>
      {/* <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton> */}
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
          <CancelButton onClick={onDisconnect}>Cancel</CancelButton>
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
