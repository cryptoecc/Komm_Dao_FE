import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButton,
  ModalButtonWrapper,
} from './ContributionModal.style';

interface ContributionModalProps {
  isOpen: boolean;
  claimedXP: number;
  onClose: () => void;
}

const ContributionModal: React.FC<ContributionModalProps> = ({ isOpen, claimedXP, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Congratulations!</ModalTitle>
        <ModalText>Claimed successfully! You have earned {claimedXP} XP.</ModalText>
        <ModalButtonWrapper>
          <ModalButton onClick={onClose}>OK</ModalButton>
        </ModalButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContributionModal;
