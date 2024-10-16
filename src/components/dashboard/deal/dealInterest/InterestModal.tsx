import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ModalContainer,
  ModalContent,
  ButtonGroup,
  ConfirmButton,
  EditButton,
  DateText,
  SubMission,
  Redirect,
  SpinIcon,
} from './InterestModal.style';
import spinIcon from 'src/assets/modal/spinner.png';

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
  const [isSubmissionComplete, setIsSubmissionComplete] = useState(false); // 상태 변수 추가

  const handleConfirm = () => {
    if (amount < minInterest || amount > maxInterest) {
      onInvalid();
    } else {
      setIsSubmissionComplete(true);
      setTimeout(() => {
        onConfirm();
        toast.success('Submission successful!'); // 성공 알림 표시
        navigate('/mainboard/dashboard'); // 대시보드로 리디렉션
      }, 2000); // 2초 후 리디렉션
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        {isSubmissionComplete ? (
          <>
            <SubMission>
              <h2>Submission Completed!</h2>
              <p>You can track your submission status in the dashboard.</p>
              <Redirect>
                <SpinIcon src={spinIcon} />
                <span>Redirecting to your dashboard...</span> {/* 새로운 내용 추가 */}
              </Redirect>
            </SubMission>
          </>
        ) : (
          <>
            <h2>You’ve Submitted {amount.toLocaleString()} USDT</h2>
            <p>You’ll receive an email once your allocation has been decided.</p>
            <DateText>{date}</DateText>
            <ButtonGroup>
              <EditButton onClick={onEdit}>Edit Amount</EditButton>
              <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
            </ButtonGroup>
          </>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default InterestModal;
