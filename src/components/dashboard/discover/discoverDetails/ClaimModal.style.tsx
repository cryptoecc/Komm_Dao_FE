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
  height: 300px;
  width: 600px;
  text-align: left;
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const ModalText = styled.p`
  font-size: 18px;
  width: 380px;
  margin-bottom: 50px;
  line-height: 24px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  width: 380px;
  margin-bottom: 20px;
  line-height: 24px;
`;

export const LoadingMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  font-weight: 700;
  float: right;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Button = styled.div`
  font-size: 18px;
  color: #fff;
  float: right;
  font-weight: 700;
  padding: 17px 26px;
  background: var(--Purple-900, #7c4dff);
  border-radius: 20px;
  cursor: pointer;
`;

export const LoadingSpinner = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.1); /* 바깥 테두리를 옅은 회색으로 */
  border-radius: 50%;
  border-top: 2px solid #3498db; /* 상단 테두리를 파란색으로 변경 */
  width: 15px;
  height: 15px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
