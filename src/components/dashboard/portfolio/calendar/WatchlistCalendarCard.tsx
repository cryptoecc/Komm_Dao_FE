import React, { useState } from 'react';
import { WatchlistCalendarCardContainer } from './WatchlistCalendar.style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import './Calendar.css';

const WatchlistCalendarCard: React.FC = () => {
  const [value, setValue] = useState<Date | [Date, Date] | null>(new Date());

  const handleChange = (newValue: Date | [Date, Date] | null) => {
    setValue(newValue);
  };

  const mark = ['24-05-2022', '26-05-2022'];

  return (
    <WatchlistCalendarCardContainer>
      <Calendar
        onChange={handleChange}
        value={value}
        tileClassName={({ date }) => {
          const dateString = moment(date).format('DD-MM-YYYY');
          if (mark.includes(dateString)) {
            return 'highlight';
          }
          return undefined;
        }}
      />
    </WatchlistCalendarCardContainer>
  );
};

export default WatchlistCalendarCard;
