import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  fill: #f9f8fe;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 20px;
`;

export const StepContent = styled.div`
  text-align: center;
`;

export const ConnectButton = styled.button`
  background: #7c4dff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #5a3ab1;
  }
`;
