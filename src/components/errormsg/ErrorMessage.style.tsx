import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  margin-top: 20px;
  color: #404040;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
  /* padding: 0px 256px 60px 0px; */
  top: 150px;
`;

export const DirectMsg = styled.p`
  color: #875cff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
  padding: 10px;
`;

export const ErrorContent = styled.div`
  width: 600px;
  height: 300px;
  padding: 30px;
`;
