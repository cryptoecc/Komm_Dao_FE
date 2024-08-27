import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 312px;
    width: 661px;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 20px;
    padding: 70px 57px 57px;
    gap: 101px;
    z-index: 7;
`

export const P = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: text;
`

export const VoteContainer = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
`
export const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 23px;
`
export const Btn = styled.button<{ active?: boolean }>`
    text-align: center;
    height: 58px;
    padding: 17px 26px;
    flex-shrink: 0;
    background-color: ${({ active }) => active ? 'var(--main-btn-color)' : 'transparent'};
    border: ${({ active }) => active ? 'none' : '1px solid #000'};
    color: ${({ active, theme }) => active ? theme.colors.white : theme.colors.black};
    border-radius: 20px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`