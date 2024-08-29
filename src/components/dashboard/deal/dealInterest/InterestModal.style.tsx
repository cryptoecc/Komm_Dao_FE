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
  width: 480px;
  height: 240px;
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
  }

  p {
    margin-bottom: 8px;
    font-size: 14px;
    color: #666;
  }

  p:last-child {
    margin-bottom: 24px;
    font-size: 12px;
    color: #888;
  }
`;

export const DateText = styled.p`
  text-align: right;
  margin-top: 30px;
  margin-right: 10px;
  font-size: 12px;
  color: #888;
  margin-bottom: 8px; /* Smaller space between date and buttons */
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0; /* Remove margin to keep buttons close to date */

  button {
    margin-left: 8px; /* Adds space between buttons */
  }
`;

export const EditButton = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: #888;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #7c4dff;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #6e35b2;
  }
`;
