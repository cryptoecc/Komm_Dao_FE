import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

interface CalendarEvent {
  date: string;
  company: string;
  description: string;
  color: string;
}

interface CustomCalendarProps {
  events: CalendarEvent[];
}

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height to center vertically */
`;

const StyledCalendar = styled(Calendar as any)`
  width: 90%;
  border: 7px #f9f9f9 solid;
  .react-calendar__tile--active {
    background-color: #6e35b2 !important;
    color: white !important;
  }
`;

const EventBlock = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 4px;
  padding: 2px 5px;
  margin-top: 2px;
  font-size: 10px;
  text-align: center;

  strong {
    display: block;
    font-weight: bold;
  }
`;

const CustomCalendar: React.FC<CustomCalendarProps> = ({ events }) => {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;
    const dateString = date.toISOString().split('T')[0];
    const eventsForDay = events.filter((event) => event.date === dateString);

    return (
      <div>
        {eventsForDay.map((event, index) => (
          <EventBlock key={index} color={event.color}>
            <strong>{event.company}</strong>
          </EventBlock>
        ))}
      </div>
    );
  };

  return (
    <CalendarContainer>
      <StyledCalendar
        tileContent={tileContent as any} // Casting to `any` to bypass type issues
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;
