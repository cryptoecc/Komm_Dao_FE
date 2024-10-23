import React from 'react';
import { ModalContainer, ModalContent, ConfirmButton, CloseButton } from './InvalidModal.style';
import closeIcon from 'src/assets/modal/close.svg';

interface InvalidModalProps {
  message: string;
  minAmount: number;
  maxAmount: number;
  onClose: () => void;
}

const InvalidModal: React.FC<InvalidModalProps> = ({ message, minAmount, maxAmount, onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close" style={{ width: '24px', height: '24px' }} /> {/* SVG 이미지 */}
        </CloseButton>{' '}
        <h2>Invalid Amount</h2>
        <p>Please enter an amount between [Minimum Amount] and [Maximum Amount] USDT to proceed.</p>
        <div style={{ textAlign: 'right' }}>
          <ConfirmButton onClick={onClose}>OK</ConfirmButton>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default InvalidModal;
