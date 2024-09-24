import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 475px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  text-align: center;
`;

export const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const ModalMessage = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;
