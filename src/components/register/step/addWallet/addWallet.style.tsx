import styled from 'styled-components';

export const Container = styled.div``;

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

export const WalletContainer = styled.div`
  display: inline-flex;
  height: 58px;
  /* justify-content: ; */
  align-items: center;
  gap: 10px;
  margin-top: 40px;

  button {
    background-color: #7c4dff;
    color: white;
    border: none;
    padding: 17px 26px;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #7a52e3;
    }
  }
`;
