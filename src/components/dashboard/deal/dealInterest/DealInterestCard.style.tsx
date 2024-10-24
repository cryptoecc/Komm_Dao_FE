import styled from 'styled-components';

interface InputProps {
  isNumeric?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 7px solid #f2eeff;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  min-height: 80vh;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 85%;
    padding: 10px;
    min-height: 60vh;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 8px;
    min-height: 55vh;
  }

  @media (min-width: 1600px) {
    margin-top: 50px;
  }
`;

export const Title = styled.h1`
  color: #564dba;
  font-size: 32px;
  font-weight: 600;
  margin-top: 50px;
  /* margin-bottom: 20px; */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 500px;
  height: 93px;
  background: white;
  border-radius: 10px;
  border: 5px solid #d9d9d9;
  padding: 10px;
  margin-bottom: 30px;
  position: relative;
  margin-top: -20px;

  @media (max-width: 768px) {
    width: 95%;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50px;
  }
`;

export const Input = styled.input.attrs<InputProps>({ type: 'text' })`
  flex: 1;
  border: none;
  padding: 10px;
  width: 60%;
  text-align: center;
  outline: none;
  color: #5c5c5c;
  font-weight: 500;

  font-size: ${(props) => (props.isNumeric ? '30px' : '16px')};
  margin-left: 70px;

  &::placeholder {
    font-size: 28px;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => (props.isNumeric ? '20px' : '14px')};
    margin-left: 3px;

    &::placeholder {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    font-size: ${(props) => (props.isNumeric ? '18px' : '12px')};
    margin-left: 2px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const USDTText = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  padding-right: 5px;
  margin-right: 10px;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-right: 3px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding-right: 2px;
  }
`;

export const MaxButton = styled.button`
  position: absolute;
  bottom: -50px;
  right: 0;
  transform: translateX(-10%);
  color: #6a5feb;
  line-height: normal;
  font-size: 30px;
  font-weight: 500;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
    bottom: -30px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    bottom: -25px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  width: 85%;
  height: 1px;
  border: 3px #d9d9d9 solid;

  @media (max-width: 768px) {
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    margin: 3px 0;
  }

  /* 조건: 화면 높이가 400px 이하로 줄어들면 Divider를 숨깁니다 */
  @media (max-height: 650px) {
    display: none;
  }
`;

export const AllocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: -40px 0;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 8px;
  }
`;

export const AllocationText = styled.div`
  color: #6a5feb;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AllocationValue = styled.div`
  color: #404040;
  font-size: 20px;
  font-weight: 500;
  text-align: right;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContinueButton = styled.button`
  /* margin-top: 20px; */
  margin-bottom: 40px;
  padding: 15px 26px;
  background: linear-gradient(0deg, #6a5feb 0%, #6a5feb 100%);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  max-width: 180px;
  height: 60px;

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 150px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    max-width: 140px;
  }

  &:hover {
    background-color: #774bcc;
  }
`;
