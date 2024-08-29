import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// 타입 정의
export interface CalendarEvent {
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
  font-size: 10px;
  text-align: left;
  width: 110px;
  height: 26px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  strong {
    display: block;
    font-weight: bold;
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

// export const StyledCalendar = styled(Calendar as any)`
//   width: auto;
//   max-width: 1040px;
//   border: 7px #f9f9f9 solid;
//   padding: 20px;
//   box-sizing: border-box;
//   overflow: visible; /* Calendar의 overflow 설정 */

//   .react-calendar__tile {
//     width: 150px;
//     height: 120px;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     padding: 10px;
//     box-sizing: border-box;
//     overflow: visible; /* 타일 내부의 overflow 설정 */
//   }

//   .react-calendar__month-view__weekdays {
//     height: 50px;
//   }

//   .react-calendar__tile--now {
//     background: #ffeb3b;
//     color: black;
//   }

//   .react-calendar__tile--active {
//     background-color: #6e35b2 !important;
//     color: white !important;
//   }

//   .react-calendar__month-view__days__day--weekend {
//     color: red;
//   }
// `;

// // export const EventBlock = styled.div<{ color: string }>`
// //   background-color: ${({ color }) => color};
// //   color: white;
// //   border-radius: 4px;
// //   padding: 4px 6px; /* Padding 조정 */
// //   margin-top: 4px; /* 이벤트 간 간격 조정 */
// //   font-size: 10px; /* 글자 크기 조정 */
// //   text-align: left;
// //   width: 110px;
// //   height: 26px;
// //   box-sizing: border-box;

// //   strong {
// //     display: block;
// //     font-weight: bold;
// //     white-space: nowrap;
// //     overflow: hidden;
// //     text-overflow: ellipsis;
// //     max-width: 100%;
// //   }

// //   p {
// //     margin: 0;
// //     font-size: 9px; /* 설명 텍스트의 크기 조정 */
// //     white-space: nowrap;
// //     overflow: hidden;
// //     text-overflow: ellipsis;
// //     max-width: 100%;
// //   }
// // `;
// export const EventBlock = styled.div<{ color: string }>`
//   background-color: ${({ color }) => color};
//   color: white;
//   border-radius: 4px;
//   padding: 4px 6px;
//   margin-top: 4px;
//   font-size: 10px;
//   text-align: left;
//   width: 110px;
//   height: 26px;
//   box-sizing: border-box;
//   position: relative;
//   overflow: visible;

//   strong {
//     display: block;
//     font-weight: bold;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     max-width: 100%;
//   }

//   p {
//     margin: 0;
//     font-size: 9px;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     max-width: 100%;
//   }

//   &:hover .tooltip {
//     display: block; /* Hover 시 툴팁 보이게 설정 */
//   }
// `;
// export const Tooltip = styled.div`
//   display: none; /* 기본적으로 툴팁 숨김 */
//   position: absolute;
//   top: 30px;
//   left: 0;
//   width: 200px;
//   background-color: black;
//   color: black;
//   border: 1px solid #ccc;
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   z-index: 10;
//   font-size: 12px;
//   white-space: pre-wrap;
//   overflow: visible;
// `;
