import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
`
export const Content = styled.section<{ gap: number }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: ${({ gap }) => `${gap}px`};
    width: 100%;
`
export const P = styled.p<{ fontSize: number, color?: string, fontWeight: number }>`
    font-size: ${({ fontSize }) => `${fontSize}px`};
    color: ${({ color, theme }) => color ? color : theme.colors.black};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: normal;
    line-height: normal;
    cursor: pointer;
`
export const Column = styled.section<{ gap: number }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: ${({ gap }) => `${gap}px`};
    width: 100%;
`
export const Row = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const InputContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    padding: 16px;
    border: 1px solid #000;
    border-radius: 20px;
    width: 950px;
    margin: 0;
`
export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: #000;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const NavBar = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 190px;
    width: 100%;
    gap: 26px;
    border-bottom: 2px solid #D9D9D9;
    padding: 10px 0;
`
export const NavList = styled.li<{ active: boolean }>`
    cursor: pointer;
    list-style-type: none;
    text-decoration: none;
    color: #875CFF;
    font-size: 25px;
    font-style: normal;
    font-weight: ${({ active }) => active ? '700' : '400'};
    line-height: normal;
`
export const Button = styled.button`
    background-color: var(--main-btn-text-color);
    padding: 17px 26px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`