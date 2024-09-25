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
  padding: 40px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
  height: 450px;
  width: 100%;

  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center; /* 세로 가운데 정렬 */
  align-items: center; /* 가로 가운데 정렬 */
  text-align: center; /* 텍스트 가운데 정렬 */
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </ModalBackground>
  );
};

export default Modal;
