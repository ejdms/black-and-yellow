import React, { Component } from "react";

class Person extends Component {
  state = {
    moved: false
  };

  toggleMove = () => {
    this.setState(prev => ({
      moved: !prev.moved
    }));
  };

  render() {
    const { id, src, moveable, text } = this.props;
    const mainClassName = `persons--person${
      moveable ? " persons--person-bottom" : ""
    }${this.state.moved ? " move" : ""}`;
    return (
      <div className={mainClassName} key={id} onClick={this.toggleMove}>
        <div className="persons--person--image-container">
          <div
            className="persons--person--image-container--img"
            style={{ backgroundImage: `url("${src}")` }}
          ></div>
          <div className="persons--person--image-container--border"></div>
        </div>
        <div className="persons--person--text">{text}</div>
      </div>
    );
  }
}

export default Person;
