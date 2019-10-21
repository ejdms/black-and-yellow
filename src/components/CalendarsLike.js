import React, { Component } from "react";

import CaledarLike from "./CalendarLike";

class CalendarsLike extends Component {
  state = {
    calendars: this.props.calendars
  };

  handleShuffle = () => {
    const array = this.state.calendars;
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState(prev => ({
      calendars: array
    }));
  };

  render() {
    const calendarsLike = this.state.calendars.map(calendar => (
      <CaledarLike
        key={calendar.id}
        text={calendar.text}
        type={calendar.type}
      />
    ));
    return (
      <>
        <div className="calendars-like">{calendarsLike}</div>
        <div className="calendars-like-button">
          <div
            className="calendars-like-button-button"
            onClick={this.handleShuffle}
          >
            <i className="fas fa-random"></i>
          </div>
        </div>
      </>
    );
  }
}

export default CalendarsLike;
