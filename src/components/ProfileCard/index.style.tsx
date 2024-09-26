import styled from 'styled-components'


export const Container = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    flex-direction: column;
    width: 361px;
    height: 212px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white1};
    padding: 16px 20px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const ProfileImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const NameAddressWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    flex-direction: column;
    padding-top: 22px;
`
export const H3 = styled.h3<{ fontWeight: number }>`
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-style: normal;
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: normal;
`

export const IMG = styled.img`
    width: 50px;
    height: 51px;
    flex-shrink: 0;
    object-fit: contain;
    border-radius: 50px;
`
export const P = styled.p<{ color: string; fontSize: number }>`
    color: ${({ color }) => `var(${color})`};
    font-size: ${({ fontSize }) => `${fontSize}px`};
    font-style: normal;
    font-weight: 400;
    line-height: normal;  
`
export const Span = styled.span<{ fontWeight: number }>`
    font-weight: ${({ fontWeight }) => fontWeight};
`

export const DelegateBtn = styled.button<{ backgroundColor: string; border?: string; width?: number; height?: number; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${({ width }) => width ? `${width}px` : '100px'};
    height: ${({ height }) => height ? `${height}px` : '30px'};
    border-radius: 20px;
    border: ${({ border }) => `${border ? border : 'none'}`};
    background-color: ${({ backgroundColor }) => `var(${backgroundColor})`};
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`

export const LastContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`