import React from "react";

const CalendarLike = ({ text, type }) => {
  return (
    <div className="calendars-like--calendar">
      <div className="calendars-like--calendar--text">{text}</div>
      <div className="calendars-like--calendar--graphic">
        <div
          className={`calendars-like--calendar--rod calendars-like--calendar--graphic--${type}-rod`}
        ></div>
      </div>
    </div>
  );
};

export default CalendarLike;
