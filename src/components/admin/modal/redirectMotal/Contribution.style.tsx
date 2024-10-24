import styled from 'styled-components';

export const ButtonGroup = styled.div`
  margin-top: 40px;
  text-align: right;
`;

export const ConfirmButton = styled.button`
  background: var(--Purple-900, #6a5feb);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  padding: 14px 34px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #564dba;
  }
`;

export const CloseButton = styled.button`
  float: right;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Wrap = styled.div`
  padding-left: 30px;
  color: #404040;
  /* padding-top: 10px; */
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  line-height: normal;
  /* height: 100%; */
`;
