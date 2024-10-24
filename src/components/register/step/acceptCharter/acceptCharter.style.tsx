import styled from 'styled-components';

export const CharterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: normal;

  margin-bottom: 30px;
`;
export const DocumentContent = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  height: 600px;
  overflow-y: scroll;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const AcceptButton = styled.button`
  background: #6a5feb;
  color: #fff;
  border: none;
  height: 40px;
  padding: 8px 26px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 600;
  float: right;
  align-items: center;

  &:hover {
    background: #564dba;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
