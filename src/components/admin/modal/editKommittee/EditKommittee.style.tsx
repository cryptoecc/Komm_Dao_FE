import styled from 'styled-components';

export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 720px;
  height: 50px;
  background: #fff;
  font-size: 20px;

  &::placeholder {
    color: #000;
    font-weight: 300;
    font-style: normal;
    font-family: Inter;
    font-size: 20px;
    align-items: center;
  }
`;
