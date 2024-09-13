import React from 'react';
import { ModalContainer, ModalContent, ButtonGroup, ConfirmButton, EditButton, DateText } from './InterestModal.style';

interface InterestModalProps {
  amount: number;
  date: string;
  minInterest: number; // Added minInterest
  maxInterest: number; // Added maxInterest
  onEdit: () => void;
  onConfirm: () => void;
  onInvalid: () => void; // Added onInvalid for handling invalid amounts
}

const InterestModal: React.FC<InterestModalProps> = ({
  amount,
  date,
  minInterest,
  maxInterest,
  onEdit,
  onConfirm,
  onInvalid,
}) => {
  const handleConfirm = () => {
    if (amount < minInterest || amount > maxInterest) {
      onInvalid(); // Call the function to show InvalidModal
    } else {
      onConfirm(); // Call the function to confirm the submission
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>You’ve Submitted {amount.toLocaleString()} USDT</h2>
        <p>You’ll receive an email once your allocation has been decided.</p>
        <DateText>{date}</DateText>
        <ButtonGroup>
          <EditButton onClick={onEdit}>Edit Amount</EditButton>
          <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default InterestModal;
