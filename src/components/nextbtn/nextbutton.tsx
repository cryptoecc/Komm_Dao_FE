import styled from 'styled-components';

const NextButton = styled.button`
  display: inline-flex;
  justify-content: center;
  /* right: 50px; */
  background: var(--Purple-900, #7c4dff);
  border: none;
  border-radius: 20px;
  padding: 17px 26px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  float: right;

  &:hover {
    background: #d1d1e9;
    color: var(--Purple-900, #7c4dff);
  }

  &:disabled {
    background: #fff;
    border: 1px solid #000;
    color: #404040
    line-height: normal;
    cursor: not-allowed;
    font-weight: 500;
  }
`;

const NextBtn = () => {
  return <NextButton>Next</NextButton>;
};

export default NextBtn;
