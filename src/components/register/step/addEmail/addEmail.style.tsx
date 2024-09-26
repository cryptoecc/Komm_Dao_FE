import styled, { keyframes } from 'styled-components';
import SpinnerImg from 'src/assets/modal/spinner.png';
import EditImg from 'src/assets/register/Edit.svg';

export const Text = styled.p`
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Email = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 600px;
  height: 60px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #f8f8fa;
  gap: 5px;
  padding-left: 30px;
  margin-top: 40px;

  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  input {
    flex: 1;
    border: none;
    background: none;
    width: 100%;
    font-size: 20px;
    color: #000;
    font-weight: 400;
    line-height: normal;

    &:focus {
      outline: none;
    }
  }
`;

export const NextButton = styled.button`
  /* margin-top: 30px; */
  /* margin-left: 50px; */
  /* display: flex;
  justify-content: center;
  width: 100px; */
  display: inline-flex;
  justify-content: center;
  /* right: 50px; */
  background: var(--Purple-900, #7c4dff);
  border: none;
  border-radius: 20px;
  padding: 17px 26px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  float: right;

  &:hover {
    background: #d1d1e9;
    color: var(--Purple-900, #7c4dff);
  }

  &:disabled {
    background: #fff;
    border: 1px solid #000;
    color: #000;
    line-height: normal;
    cursor: not-allowed;
    font-weight: 500;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
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
  background: url(${SpinnerImg}) no-repeat center;
  background-size: contain;
  animation: ${spin} 1s linear infinite;
  /* margin: 0 auto; */
`;

export const SpinnerWrapper = styled.div`
  /* displa/y: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  margin-right: 20px;
`;

export const VerifySection = styled.div`
  /* margin-left: 20px; Adjust this value to control how far left it should be */
  /* gap: 10px; */
  float: left;
`;

export const Code = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 600px;
  height: 60px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #f8f8fa;
  gap: 5px;
  padding-left: 20px;
  margin-top: 40px;

  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  input {
    flex: 1;
    border: none;
    background: none;
    width: 100%;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    line-height: normal;

    &:focus {
      outline: none;
    }
  }
`;

export const Edit = styled.button`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`;

export const EditImage = styled.div`
  width: 24px;
  height: 24px;
  background: url(${EditImg});
`;
