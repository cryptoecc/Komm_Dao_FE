import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 7px #f2eeff solid;
  border-radius: 10px;
  width: 70%;
  max-width: 800px;
  min-height: 90vh;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
    min-height: 60vh;
  }
`;

export const Title = styled.h1`
  color: #210d5c;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-top: 40px;
  word-wrap: break-word;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100px;
  background: white;
  border-radius: 10px;
  border: 5px #d9d9d9 solid;
  padding: 10px;
  margin-bottom: 40px;
  position: relative;
  margin-top: -20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 80px;
  }
`;

export const Input = styled.input<{ isNumeric: boolean }>`
  flex: 1;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  font-size: ${(props) => (props.isNumeric ? '36px' : '18px')}; /* 숫자가 입력되면 큰 폰트 크기로 설정 */
  margin-left: 50px;

  &::placeholder {
    font-size: 36px;
    margin-left: -20px;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => (props.isNumeric ? '24px' : '16px')};

    &::placeholder {
      font-size: 24px;
    }
  }
`;

export const USDTText = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  padding-right: 10px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-right: 5px;
  }
`;

export const MaxButton = styled.button`
  position: absolute;
  bottom: -50px;
  right: 0;
  transform: translateX(-10%);
  color: #7c4dff;
  font-size: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  text-decoration: underline;
  word-wrap: break-word;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
    bottom: -40px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  border: 3px #d9d9d9 solid;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const AllocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: -50px 0;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 10px;
  }
`;

export const AllocationText = styled.div`
  color: #a380f9;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const AllocationValue = styled.div`
  color: black;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  text-align: right;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
    margin-top: 0;
  }
`;

export const ContinueButton = styled.button`
  margin-top: 20px;
  margin-bottom: 40px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 17px;
  padding-bottom: 17px;
  background: linear-gradient(0deg, #7c4dff 0%, #7c4dff 100%);
  color: white;
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    font-size: 20px;
    max-width: 150px;
  }

  &:hover {
    background-color: #774bcc;
  }
`;
