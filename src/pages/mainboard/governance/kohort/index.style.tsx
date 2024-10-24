import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 57px;
`;
export const FirstBlockWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 43px;
  width: 100%;
`;

export const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 354px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: var(--main-card-color);
  padding: 14px 17px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  color: #404040;
  text-align: left;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Button = styled.button`
  text-align: center;
  padding: 17px 26px;
  height: 58px;
  background-color: var(--main-btn-color);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const SecondBlockWrap = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 43px;
  width: 100%;
`;
export const KohortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex-shrink: 0;
  width: 301px;
  height: 243px;
  border: 10px solid var(--main-border-color);
  flex-direction: column;
  gap: 25px;
  cursor: pointer;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 100px;
  height: 100px;
  background-color: var(--sub-border-color);
`;
export const Logo = styled.img`
  width: 84px;
  height: 83px;
  border-radius: 50px;
  object-fit: fit;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 19px;
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.black};
`;
export const P = styled.p<{ fontSize: number; whiteSpace?: string }>`
  color: rgba(0, 0, 0, 0.5);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #f3efff;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: ${({ whiteSpace }) => `${whiteSpace ? whiteSpace : 'normal'}`};
`;
