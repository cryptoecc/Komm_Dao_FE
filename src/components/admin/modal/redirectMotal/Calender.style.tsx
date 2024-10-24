import styled from 'styled-components';

export const ButtonGroup = styled.div`
  text-align: right;
  margin-top: 40px;
`;

export const ConfirmButton = styled.button`
  background: var(--Purple-900, #6a5feb);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  padding: 12px 34px;
  font-size: 18px;
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
  /* padding-top: 10px; */
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  /* height: 100%; */
`;
