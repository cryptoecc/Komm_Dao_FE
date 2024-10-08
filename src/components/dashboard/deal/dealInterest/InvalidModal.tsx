import React from 'react';
import { ModalContainer, ModalContent, ConfirmButton } from './InvalidModal.style';

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
