import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 60px 66px;
`

export const FirstBlockWrap = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 43px;
    max-width: 700px;
    width: 100%;
`
export const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 12px;
`

export const P = styled.p<{ fontSize: number; color?: string; fontWeight: number }>`
    font-size: ${({ fontSize }) => `${fontSize}px`};
    color: ${({ color, theme }) => color ? color : theme.colors.black};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: normal;
    line-height: normal;
    cursor: pointer;
`

export const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const CardWrap = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 23px;
    width: 100%;
    flex-direction: column;
    max-width: 600px;
`
export const Content = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
`
export const ProfileWrap = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

`
export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`
export const IMG = styled.img`
    width: 50px;
    height: 51px;
    object-fit: fit;
    border-radius: 50px;
`
export const StatusBtn = styled.div<{ status: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 11px;
  border-radius: 20px;
  background-color: ${({ status }) => status === 2 ? 'var(--status-card-disabled-bg)' : 'var(--main-btn-background-color)'};
`
export const StatusBtnText = styled.p<{ status: number }>`
  color: ${({ status }) => status === 2 ? 'var(--status-card-disabled-color)' : 'var(--main-btn-text-color)'};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const BtnBlock = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    max-width: 600px;
`

export const VoteBtn = styled.button`
    width: 100%;
    text-align: center;
    padding: 17px 26px;
    border-radius: 20px;
    background-color: var(--main-vote-btn-color);
    color: ${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`

export const SecondBlockWrap = styled.section``