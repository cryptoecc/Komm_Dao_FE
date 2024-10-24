import styled from 'styled-components';

export const Container = styled.div``;

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

export const WalletContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 58px;
  align-items: center;
  gap: 10px;
  margin-top: 40px;

  button {
    background-color: #6a5feb;
    color: white;
    border: none;
    padding: 17px 26px;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #564dba;
    }
  }
`;
