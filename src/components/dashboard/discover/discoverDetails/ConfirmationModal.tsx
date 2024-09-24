import React from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalMessage } from './ConfirmationModal.style';

const ConfirmationModal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Confirmation</ModalTitle>
        <ModalMessage>URL Successfully Copied</ModalMessage>
      </ModalContent>
    </ModalContainer>
  );
};

export default ConfirmationModal;
