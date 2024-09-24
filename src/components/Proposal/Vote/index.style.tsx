import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
`

export const Content = styled.section<{ gap: number, padding?: number }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: ${({ gap }) => `${gap}px`};
    width: 100%;
    padding: ${({ padding }) => padding ? `0 ${padding}px` : 0};
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
export const OptionBlock = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`