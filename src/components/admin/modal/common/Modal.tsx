import React from 'react';
import styled from 'styled-components';
import closeIcon from 'src/assets/modal/close.svg';

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
  max-width: 700px;
  max-height: 500px;
  width: 100%;
  /* margin-top: 10px; */

  /* display: flex; Flexbox 사용 */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: end; */
  /* text-align: center; */
`;

const CloseButton = styled.button`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  /* justify-content: end; */
  /* align-items: end; */
  float: right;
  /* margin-bottom: 30px; */
`;

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close" style={{ width: '24px', height: '24px' }} />
        </CloseButton>
        <br />
        <br />
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
