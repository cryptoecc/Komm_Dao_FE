import styled from 'styled-components';

export const ButtonGroup = styled.div`
  text-align: right;
`;

export const ConfirmButton = styled.button`
  background: var(--Purple-900, #7c4dff);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  padding: 14px 34px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #6e35b2;
  }
`;

export const CloseButton = styled.button`
  float: right;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  text-align: end;
`;

export const Wrap = styled.div`
  padding-left: 40px;
  padding-top: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 300px;
`;
