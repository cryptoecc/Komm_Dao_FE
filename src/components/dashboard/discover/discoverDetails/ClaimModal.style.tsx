import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%; /* Ensure the container takes full width */
  height: 100%; /* Ensure the container takes full height */
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 550px;
  height: 280px;
  width: 100%;
  text-align: left;
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background-color: #875cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;

  position: absolute;
  bottom: 20px; /* Position the button 20px from the bottom of the modal content */
  right: 20px; /* Position the button 20px from the right of the modal content */

  &:hover {
    background-color: #7a52e3;
  }
`;
