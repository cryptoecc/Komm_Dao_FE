import styled, { css } from 'styled-components';

interface StepProps {
  $active: boolean;
  $completed: boolean;
}

export const Container = styled.div`
  width: 300px;
  flex-shrink: 0;

  /* justify-content: space-between; */
  align-items: center;
  background: #f9f9f9;
`;

export const SidebarContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  background: #f9f9f9;
  align-items: flex-start;
  padding: 41px 25px 36px 33px;
  gap: 20px;
  height: 60vh;
`;

export const Step = styled.div<StepProps>`
  display: flex;
  /* align-items: center; */
  /* flex-direction: row; */
  /* justify-content: center; */
  gap: 15px;
  color: ${({ $active, $completed }) => ($active ? '#8E63FF' : $completed ? '#7C4DFF' : '#000')};
  font-weight: ${({ $active, $completed }) => ($active || $completed ? 'bold' : 'normal')};

  &::before {
    color: ${({ $active, $completed }) => ($active ? '#8E63FF' : $completed ? '#7C4DFF' : '#000')};
  }
`;

export const Text = styled.div<StepProps>`
  display: flex;
  /* height: 41px; */
  padding: 12px 16px;
  /* text-align: start; */
  /* flex-direction: row; */
  /* padding: 12px 16px; */
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  font-size: 19px;
  color: ${({ $active, $completed }) => ($active ? '#6A5FEB' : $completed ? '#404040' : '#8e8e93')};
  font-weight: ${({ $active, $completed }) => ($active || $completed ? 600 : 500)};
  line-height: 20px; /* 100% */
`;

export const Number = styled.div<StepProps>`
  display: flex;
  width: 45px;
  height: 45px;
  padding: 15px 20px;
  font-size: 20px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  /* align-self: stretch; */
  border-radius: 15px;
  font-feature-settings: 'clig' off, 'liga' off;
  border: 3px solid
    ${({ $active, $completed }) =>
      $active ? 'var(--Purple-900, #6A5FEB)' : $completed ? 'var(--Purple-900, #6A5FEB)' : '#5C5C5C'};
  background: ${({ $active, $completed }) => ($active ? '#FBFBFF' : $completed ? '#6A5FEB' : '#FBFBFF')};
  color: ${({ $active, $completed }) => ($active ? '#6A5FEB' : $completed ? '#fff' : '#5C5C5C')};

  //
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
`;

export const Logo = styled.img`
  width: 88px;
  height: 88px;
  margin: 40px 30px 60px 30px;
  /* margin-bottom: 20px; */
  cursor: pointer;
`;
