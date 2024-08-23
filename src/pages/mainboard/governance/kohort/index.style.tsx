import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
export const FirstBlockWrap = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 43px;
    width: 100%;
`

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
  border: 1px solid rgba(0, 0, 0, 0.50);
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  color: #000;
  text-align: left;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

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
`

export const SecondBlockWrap = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 43px;
    width: 100%;
`
export const KohortBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    flex-shrink: 0;
    width: 301px;
    height: 243px;
    border: 10px solid var(--main-border-color);
`

export const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--sub-border-color);
`
export const Logo = styled.img`
    width: 84px;
    height: 83px;
    border-radius: 50px;
    object-fit: fit;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`