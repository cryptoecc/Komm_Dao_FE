import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactNode } from 'react';

// 타입 정의
export interface CalendarEvent {
  keyword: ReactNode;
  date: string;
  company: string;
  description: string;
  color: string;
}

export interface CustomCalendarProps {
  events: CalendarEvent[];
}
export const StyledCalendar = styled(Calendar as any)`
  width: auto;
  max-width: 1040px;
  border: 7px #f9f9f9 solid;
  padding: 20px;
  box-sizing: border-box;
  overflow: visible;

  .react-calendar__tile {
    width: 150px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    box-sizing: border-box;
    overflow: visible;
  }

  .react-calendar__month-view__weekdays {
    height: 50px;
  }

  .react-calendar__tile--now {
    background: #ffeb3b;
    color: black;
  }

  .react-calendar__tile--active {
    background-color: #6e35b2 !important;
    color: white !important;
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;
  }
`;

export const EventBlock = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 4px;
  padding: 4px 6px;
  margin-top: 4px;
  font-size: 8px;
  text-align: left;
  width: 110px;
  height: auto; // 자동 높이 조정을 위해 auto로 변경
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  display: flex; // Flexbox를 사용하여 요소들을 같은 줄에 배치
  align-items: center;
  gap: 4px; // 회사 이름과 키워드 사이에 여백을 추가

  strong {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-size: 7px; // 글꼴 크기를 줄여서 긴 텍스트 처리
  }

  span {
    // 키워드를 span으로 감싸고 스타일링
    font-size: 7px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  p {
    margin: 0;
    font-size: 9px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export const Tooltip = styled.div`
  position: fixed;
  background: white;
  box-shadow: -10px 10px 50px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;
  font-size: 12px;
  white-space: pre-wrap;
  box-sizing: border-box;
`;
