import styled from 'styled-components';

export const Text = styled.p`
  color: #404040;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #404040;
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
  height: 45px;
  padding: 10px 26px;
  align-items: center;
  border-radius: 18px;
  background: #6a5feb;
  margin-top: 30px;

  color: #fbfbff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
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
