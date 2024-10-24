import styled from 'styled-components';

export const RateCheckWrapper = styled.div`
  /* align-items: center; */
  height: 100px;
  padding: 10px;
  background-color: white;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #404040;
    margin-top: 10px;
  }
`;

interface RateCheckButtonProps {
  isDisabled: boolean;
}

export const RateCheckButton = styled.button<RateCheckButtonProps>`
  color: ${(props) => (props.isDisabled ? '#6A5FEB' : '#fff')};
  background-color: ${(props) => (props.isDisabled ? '#FFF' : '#6a5feb')};
  padding: 10px 32px;
  border: ${(props) => (props.isDisabled ? '2px solid var(--Purple-900, #6A5FEB)' : 'none')};
  /* height: 45px; */
  border-radius: 20px;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  font-size: 18px;
  font-weight: 600;
  align-items: end;
  float: right;

  &:hover {
    background-color: ${(props) => (props.isDisabled ? '#FFF' : '#564dba')};
  }
`;

export const RateIcon = styled.img`
  width: 50px;
  height: 50px;
`;
