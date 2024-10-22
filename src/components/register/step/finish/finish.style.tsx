import styled from 'styled-components';

export const Text = styled.p`
  color: #404040;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #404040;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  /* justify-content: center; */
`;

export const Button = styled.button`
  height: 58px;
  padding: 17px 26px;
  align-items: center;
  border-radius: 20px;
  background: #6a5feb;
  margin-top: 30px;

  color: #fbfbff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background: #564dba;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
