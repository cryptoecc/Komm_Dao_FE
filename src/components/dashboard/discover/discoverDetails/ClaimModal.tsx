import React from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalText,
  CloseButton,
  LoadingMessage,
  LoadingSpinner,
  Button,
  ErrorText,
} from './ClaimModal.style';
import { ReactComponent as CloseIcon } from 'src/assets/modal/close.svg';
interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  points: number; // Points from the rating
  loading: boolean;
  isSuccess: boolean; // 성공 여부를 받는 props 추
  isError: boolean;
  onRetry: () => void;
}

const ClaimModal: React.FC<ClaimModalProps> = ({ isOpen, onClose, points, loading, isSuccess, isError, onRetry }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        {isSuccess ? (
          <>
            <ModalTitle>Congratulations!</ModalTitle>
            <ModalText>You earned 10 XP and rated {points} points.</ModalText>
            <Button onClick={onClose}>OK</Button>
          </>
        ) : isError ? (
          <>
            <ModalTitle>Unable to Claim XP</ModalTitle>
            <ErrorText>
              <span role="img" aria-label="warning">
                😞
              </span>{' '}
              We were unable to claim your XP. Please check your wallet for sufficient gas fees and try again.
            </ErrorText>
            <Button onClick={onRetry}>Retry</Button>
          </>
        ) : (
          <>
            <ModalTitle>Claiming XP...</ModalTitle>
            <ModalText>Please wait while we process your request. This may take a moment.</ModalText>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <LoadingMessage>Processing your XP claim...</LoadingMessage>
              {loading && <LoadingSpinner />}
            </div>
          </>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default ClaimModal;
