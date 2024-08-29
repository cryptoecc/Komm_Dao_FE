import React, { useRef, useState } from 'react';
import { StyledCalendar, EventBlock, CustomCalendarProps, Tooltip, CalendarEvent } from './Calendar.style';
import { Portal } from 'react-portal';

const CustomCalendar: React.FC<CustomCalendarProps> = ({ events }) => {
  const [tooltip, setTooltip] = useState<{ content: string; x: number; y: number } | null>(null);

  const showTooltip = (event: CalendarEvent, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({
      content: `${event.company}\n${event.description}`,
      x: rect.left + window.scrollX + rect.width / 2,
      y: rect.top + window.scrollY - 25, // Tooltip을 EventBlock 위로 15px 더 올림
    });
  };

  const hideTooltip = () => {
    setTooltip(null);
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;
    const dateString = date.toISOString().split('T')[0];
    const eventsForDay = events.filter((event) => event.date === dateString);

    return (
      <div>
        {eventsForDay.map((event, index) => (
          <EventBlock
            key={index}
            color={event.color}
            onMouseEnter={(e) => showTooltip(event, e)}
            onMouseLeave={hideTooltip}
          >
            <strong>{event.company}</strong>
            {/* <p>{event.description}</p> */}
          </EventBlock>
        ))}
      </div>
    );
  };

  return (
    <>
      <StyledCalendar tileContent={tileContent as any} locale="en-US" />
      {tooltip && (
        <Portal>
          <Tooltip style={{ left: tooltip.x, top: tooltip.y }}>{tooltip.content}</Tooltip>
        </Portal>
      )}
    </>
  );
};

export default CustomCalendar;
