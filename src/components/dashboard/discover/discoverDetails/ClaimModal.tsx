import React from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalText, CloseButton } from './ClaimModal.style';

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  points: number; // Points from the rating
}

const ClaimModal: React.FC<ClaimModalProps> = ({ isOpen, onClose, points }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Congratulations!</ModalTitle>
        <ModalText>You earned 10 XP and rated {points} points.</ModalText>
        <CloseButton onClick={onClose}>Back to Discover</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ClaimModal;
