import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;

  &:first-child {
    background-color: #ccc;
  }

  &:last-child {
    background-color: #875cff;
    color: white;
  }
`;

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, onConfirm, children }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <div>{children}</div>
        <ModalActions>
          <ModalButton onClick={onClose}>Cancel</ModalButton>
          <ModalButton onClick={onConfirm}>Confirm</ModalButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
