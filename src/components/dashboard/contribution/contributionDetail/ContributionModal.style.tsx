import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  width: 500px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
  width: 100%;
`;

export const ModalText = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
  width: 100%;
`;

export const ModalButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  background-color: #875cff;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #6e40cc;
  }
`;
