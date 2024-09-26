import styled, { keyframes } from 'styled-components';
import SpinnerImage from 'src/assets/modal/spinner.png';

export const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;

  /* width: 300px; */
  position: relative;
  /* top:50px; */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: Inter;
  padding: 0px 256px 60px 0px;
  /* top: 150px; */
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  float: right;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ConnectedWalletWrapper = styled.div`
  display: flex;
  width: 564px;
  height: 75px;
  justify-content: space-between;
  align-items: center;
  background: #f8f8fa;
  border-radius: 20px;
  padding: 10px 20px;
  margin: auto; /* 가운데 정렬을 위해 추가 */
`;

export const DisconnectButton = styled.button`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  background: none;
  border: none;
  cursor: pointer;
  gap: 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  /* margin-right: 28px; */
  margin-top: 48px;
  /* margin: 0 auto; */
`;

export const CancelButton = styled.button`
  display: inline-flex;
  justify-content: center;
  background: #fff;
  height: 58px;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 17px 26px;
  align-items: center;
  border: 1px solid #000;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const SignButton = styled.button`
  background-color: var(--Purple-900, #7c4dff);
  display: inline-flex;
  height: 58px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-radius: 20px;
  padding: 17px 26px;
  cursor: pointer;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  background: url(${SpinnerImage}) no-repeat center;
  background-size: contain;
  animation: ${spin} 1s linear infinite;
  /* margin: 0 auto; */
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 25px;

  p {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: #000;
  }
`;
