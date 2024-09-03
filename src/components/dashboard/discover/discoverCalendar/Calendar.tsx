import React from 'react';
import { StyledCalendar, EventBlock, CustomCalendarProps, CalendarEvent } from './Calendar.style';

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
            <span>{event.keyword}</span>
          </EventBlock>
        ))}
      </div>
    );
  };

  return <StyledCalendar tileContent={tileContent as any} locale="en-US" />;
};

export default CustomCalendar;
