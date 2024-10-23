import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 700px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  text-align: left;
  margin-bottom: 15px;
  font-size: 23px;
  font-weight: bold;
  padding: 20px;
`;

const ModalText = styled.p`
  color: #404040
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 35px;
`;

const CloseButton = styled.button`
  background: var(--Purple-900, #7c4dff);
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  float: right;
  cursor: pointer;
`;

interface ResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title: string;
}

const ResponseModal: React.FC<ResponseModalProps> = ({ isOpen, onClose, message, title }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalText>{message}</ModalText>
        <CloseButton onClick={onClose}>Cancel</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ResponseModal;
