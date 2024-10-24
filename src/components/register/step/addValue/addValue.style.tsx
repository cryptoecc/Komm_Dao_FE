import styled from 'styled-components';

export const Text = styled.p`
  color: #404040;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

export const SubText = styled.p`
  color: #404040;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Textarea = styled.textarea`
  width: 559px;
  height: 212px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
  background: #f8f8fa;
  margin-top: 35px;

  color: #404040;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Counter = styled.div`
  font-size: 19px;
  font-weight: 500;
  color: #a380f9;
  text-align: right;
  line-height: normal;
  margin-top: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const Submit = styled.button`
  background: #6a5feb;
  color: #fbfbff;
  border: none;
  padding: 17px 26px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 700;
  align-items: center;
  height: 58px;

  /* margin-left: 500px; */
  /* float: right; */
  /* margin-left: 50px; */

  &:hover {
    background: #564dba;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-left: 60px;
  /* padding-right: 20px; */
`;
