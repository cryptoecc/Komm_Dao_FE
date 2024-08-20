import styled from 'styled-components';

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: #e0e0e0;
`;

export const DayCell = styled.div`
  background-color: white;
  padding: 10px;
  min-height: 100px;
  position: relative;
  border: 1px solid #ddd;

  span {
    font-weight: bold;
  }
`;

export const EventBlock = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 8px;
  padding: 5px;
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
  position: relative;

  strong {
    display: block;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 10px;
  }

  &:hover::after {
    content: attr(data-description);
    position: absolute;
    top: -10px;
    left: 100%;
    width: 200px;
    padding: 10px;
    background: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 12px;
    white-space: pre-wrap;
    z-index: 10;
    display: block;
  }
`;
