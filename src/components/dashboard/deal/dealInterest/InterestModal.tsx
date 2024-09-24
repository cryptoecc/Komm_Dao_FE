import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModalContainer, ModalContent, ButtonGroup, ConfirmButton, EditButton, DateText } from './InterestModal.style';

interface InterestModalProps {
  amount: number;
  date: string;
  minInterest: number;
  maxInterest: number;
  onEdit: () => void;
  onConfirm: () => void;
  onInvalid: () => void;
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
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (amount < minInterest || amount > maxInterest) {
      onInvalid();
    } else {
      onConfirm();
      toast.success('Submission successful!'); // 성공 알림 표시
      navigate(-1);
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
