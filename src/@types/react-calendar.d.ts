declare module 'react-calendar' {
  import * as React from 'react';

  type CalendarValue = Date | [Date, Date] | null;

  interface CalendarProps {
    onChange: (value: CalendarValue) => void;
    value: CalendarValue;
    tileClassName?: (props: { date: Date }) => string | undefined;
    // 추가적인 prop들을 정의할 수 있습니다.
  }

  class Calendar extends React.Component<CalendarProps> {}

  export default Calendar;
}
