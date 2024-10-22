import React, { useEffect } from 'react';
import { ModalContent, CloseButton } from '../walletbtn/ConnectWallet.style';
import { ModalHeader, DirectMsg, ErrorContent } from './ErrorMessage.style';
import { ReactComponent as CloseIcon } from '../../assets/modal/close.svg';
import { ReactComponent as UnSmileIcon } from '../../assets/modal/unsmile.svg';

interface ErrorMessageProps {
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/registration'; // 등록 페이지로 리디렉션
    }, 3000); // 5초 후 리디렉션

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorContent>
      {/* <CloseButton onClick={onClose}> */}
      <UnSmileIcon style={{ marginLeft: '10px' }} />
      {/* </CloseButton> */}
      <ModalHeader>
        <p>Sorry, this wallet address is not registered.</p>
        <p>Please use a registered address to log in.</p>
      </ModalHeader>
      <DirectMsg>
        <a href="/registration" style={{ color: '#7C4DFF' }}>
          Redirecting to the registration page...
        </a>
      </DirectMsg>
    </ErrorContent>
  );
};

export default ErrorMessage;
