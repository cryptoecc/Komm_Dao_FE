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
  width: 650px; /* Slightly smaller width */
  height: 350px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    /* margin-bottom: 40px; */
    font-size: 24px;
    font-weight: bold;
    color: #404040;
  }

  p {
    margin-bottom: 16px;
    margin-top: 20px;
    font-size: 16px;
    color: #404040; /* Darker text color */
  }
`;

export const ConfirmButton = styled.button`
  background-color: #7c4dff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 30px; /* Larger padding for emphasis */
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-align: right;

  &:hover {
    background-color: #6e35b2;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  text-align: end;
`;
