import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 450px; /* Slightly smaller width */
  background: white;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    color: #333; /* Darker text color */
  }
`;

export const ConfirmButton = styled.button`
  background-color: #7c4dff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 24px; /* Larger padding for emphasis */
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: right;

  &:hover {
    background-color: #6e35b2;
  }
`;
