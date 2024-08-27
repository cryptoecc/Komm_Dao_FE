import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 60px;
`

export const FirstBlockWrap = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 155px;
    max-width: 700px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #EFEFEF;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D0D0E6;
    border-radius: 10px;
    border: none;
  }
`
export const FirstBlockInnerContent = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    gap: 43px;
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
    flex-shrink: 0;
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

export const Footer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SecondBlockWrap = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 350px;
    padding: 5px;
    gap: 90px;
`
export const InnerBlockWrap = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    flex-direction: column;
    width: 100%;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
`
export const VotesBlock = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: var(--main-card-color);
    border-radius: 10px;
    flex-shrink: 0;
    padding: 17px 27px;
    gap: 11px;
`
export const Column = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`
export const RowSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 7px;
`
export const LinearProgressContainer = styled.div`
  height: 13px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
`

export const LinearProgress = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width + '%'};
  background-color: #A380F9;
  border-radius: 10px;
  `
export const CommentsSection = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 26px;
    width: 100%;
    padding: 0 24px;
    margin: 0 0 70px 0;
`
export const CommentsHeader = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const CommentsActiveNavigation = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 270px;
`
export const ActiveTab = styled.p<{ active: boolean, margin?: number }>`
    color: ${({ active }) => active ? 'var(--main-btn-text-color)' : "#6D6D6D"};
    border-bottom: ${({ active }) => active ? '3px solid var(--main-btn-text-color)' : 'none'};
    padding: 10px;
    font-size: 20px;
    font-weight: ${({ active }) => active ? 700 : 400};
    margin-left: ${({ margin }) => `${margin}px`};
    cursor: pointer;
`

export const CommentsHeaderWrap = styled.div<{ gap: number, borderBottom?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ gap }) => `${gap}px`};
    border-bottom: ${({ borderBottom }) => borderBottom ? '1px solid #D9D9D9' : 'none'};
`
export const CommentsContainer = styled.section`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 100%;
`
export const CommentsContent = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    max-height: 240px;
    overflow-y: scroll;
    width: 100%;
    padding: 13px 0;
    &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #EFEFEF;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D0D0E6;
    border-radius: 10px;
    border: none;
  }
`
export const ProfileRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 87px;
    flex-shrink: 0;
    width: 95%;
    border-bottom: 1px solid #D9D9D9;
    padding: 8px 0;
`
export const ActiveButton = styled.button<{ active: boolean }>`
    padding: 5px 10px;
    border: none;
    background-color: ${({ active }) => active ? 'var(--main-btn-background-color)' : 'transparent'};
    color: ${({ active, theme }) => active ? 'var(--main-btn-text-color)' : theme.colors.black};
    border-radius: 10px;
    font-weight: ${({ active }) => active ? 700 : 400};
    font-size: 22px;
`
