import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
  height: 380px;
  width: 100%;
`;

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const RedirectModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </ModalBackground>
  );
};

export default RedirectModal;
