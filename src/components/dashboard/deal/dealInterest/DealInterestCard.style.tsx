import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 7px #f2eeff solid;
  border-radius: 10px;
  width: 60%; /* Reduce the width */
  max-width: 600px; /* Reduce the max-width */
  min-height: 80vh; /* Adjust the minimum height */
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 85%;
    padding: 10px;
    min-height: 60vh;
  }
`;

export const Title = styled.h1`
  color: #210d5c;
  font-size: 32px; /* Adjusted font size */
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-top: 30px;
  word-wrap: break-word;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%; /* Slightly smaller width */
  height: 80px; /* Reduce height */
  background: white;
  border-radius: 10px;
  border: 5px #d9d9d9 solid;
  padding: 10px;
  margin-bottom: 30px;
  position: relative;
  margin-top: -20px;

  @media (max-width: 768px) {
    width: 95%;
    height: 60px;
  }
`;

export const Input = styled.input<{ isNumeric: boolean }>`
  flex: 1;
  border: none;
  padding: 10px;
  width: 60%;
  text-align: center;
  outline: none;
  font-size: ${(props) => (props.isNumeric ? '28px' : '16px')}; /* Adjusted font size */
  margin-left: 25px; /* Reduce margin to decrease gap */

  &::placeholder {
    font-size: 28px;
    transition: opacity 0.3s ease; /* Smooth transition for hiding */
  }

  &:focus::placeholder {
    opacity: 0; /* Hide the placeholder when input is focused */
  }

  @media (max-width: 768px) {
    font-size: ${(props) => (props.isNumeric ? '20px' : '14px')};
    margin-left: 3px; /* Further reduce margin on smaller screens */

    &::placeholder {
      font-size: 20px;
    }
  }
`;

export const USDTText = styled.span`
  font-size: 24px; /* Adjusted font size */
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  padding-right: 5px; /* Reduce padding to decrease gap */
  word-wrap: break-word;
  margin-right: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    padding-right: 3px; /* Further reduce padding on smaller screens */
  }
`;

export const MaxButton = styled.button`
  position: absolute;
  bottom: -40px;
  right: 0;
  transform: translateX(-10%);
  color: #7c4dff;
  font-size: 24px; /* Adjusted font size */
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
    font-size: 20px;
    bottom: -30px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  width: 85%; /* Adjust width */
  height: 1px;
  border: 3px #d9d9d9 solid;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const AllocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%; /* Adjusted width */
  margin: -40px 0;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 10px;
  }
`;

export const AllocationText = styled.div`
  color: #a380f9;
  font-size: 20px; /* Adjusted font size */
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const AllocationValue = styled.div`
  color: black;
  font-size: 18px; /* Adjusted font size */
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  text-align: right;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin-top: 0;
  }
`;

export const ContinueButton = styled.button`
  margin-top: 20px;
  margin-bottom: 40px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 15px; /* Adjusted padding */
  padding-bottom: 15px; /* Adjusted padding */
  background: linear-gradient(0deg, #7c4dff 0%, #7c4dff 100%);
  color: white;
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  font-size: 20px; /* Adjusted font size */
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  max-width: 180px; /* Adjusted max-width */

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 150px;
  }

  &:hover {
    background-color: #774bcc;
  }
`;
