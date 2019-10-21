import React, { Component } from "react";

class HeroTwoLines extends Component {
  state = { deformed: false };
  handleDeform = () => {
    this.setState(prev => ({
      deformed: !prev.deformed
    }));
  };
  render() {
    const { upperText, bottomText } = this.props;
    return (
      <div className="hero-two-lines">
        <div className="hero-two-lines--bordered-element hero-two-lines--upper">
          <span>{upperText}</span>
        </div>
        <div
          className={`hero-two-lines--shape${
            this.state.deformed ? " deformed" : ""
          }`}
          onClick={this.handleDeform}
        ></div>
        <div className="hero-two-lines--bordered-element hero-two-lines--bottom">
          <span>{bottomText}</span>
        </div>
      </div>
    );
  }
}

export default HeroTwoLines;
