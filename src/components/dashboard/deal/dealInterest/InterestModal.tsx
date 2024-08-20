import React from 'react';
import { ModalContainer, ModalContent, ButtonGroup, ConfirmButton, EditButton, DateText } from './InterestModal.style';

interface InterestModalProps {
  amount: number;
  date: string;
  onEdit: () => void;
  onConfirm: () => void;
}

const InterestModal: React.FC<InterestModalProps> = ({ amount, date, onEdit, onConfirm }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>You’ve Submitted {amount.toLocaleString()} USDT</h2>
        <p>You’ll receive an email once your allocation has been decided.</p>
        <DateText>{date}</DateText>
        <ButtonGroup>
          <EditButton onClick={onEdit}>Edit Amount</EditButton>
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default InterestModal;
