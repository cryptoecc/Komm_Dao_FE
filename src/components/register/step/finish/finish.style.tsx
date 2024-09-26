import styled from 'styled-components';

export const Text = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #000;
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
  background: var(--Purple-900, #7c4dff);
  margin-top: 30px;

  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background: #d1d1e9;
    color: #7c4dff;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
