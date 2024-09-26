import React from 'react';
import { ModalBackdrop, ModalContent, ModalHeader, ModalTitle, ModalBody, CloseButton } from './Modal.style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; // children 속성 추가
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const isAddMembers = title === 'Add Members';

  return (
    <ModalBackdrop>
      <ModalContent $isAddMembers={isAddMembers} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle $isAddMembers={isAddMembers}>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
