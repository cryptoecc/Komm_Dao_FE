import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  width: 100%;
`;
export const FirstBlockWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 41px;
`;
export const SecondBlockWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
`;
export const ProfilesWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 746px;
  width: 100%;
  overflow-x: scroll;
  height: 100vh;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
export const LoadMoreBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--main-card-color);
  cursor: pointer;
`;

export const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 301px;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: var(--main-card-color);
  padding: 10px;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  color: #404040;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const P = styled.p<{ fontSize: number; whiteSpace?: string }>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: ${({ whiteSpace }) => `${whiteSpace ? whiteSpace : 'normal'}`};
`;

export const VotersWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10.5px;
  flex-direction: column;
  width: 100%;
  overflow-x: scroll;
  max-height: 300px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const VoterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 18px;
`;

export const IMG = styled.img`
  width: 50px;
  height: 51px;
  object-fit: fit;
  border-radius: 50px;
`;
export const NameWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 3px;
`;
export const FooterWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 250px;
  gap: 10px;
`;
