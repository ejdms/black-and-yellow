import React, { Component } from "react";
import ContactField from "./ContactField";

class ContactForm extends Component {
  state = {
    email: "",
    message: ""
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = (type, e) => {
    const value = e.target.value;
    switch (type) {
      case "email":
        this.setState(prev => ({
          email: value
        }));
        break;
      case "message":
        this.setState(prev => ({
          message: value
        }));
        break;
      default:
        return null;
    }
  };
  render() {
    const { email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <ContactField
          name="Your email"
          type="inputText"
          value={email}
          change={this.handleChange}
        />
        <ContactField
          name="Message"
          type="textarea"
          value={message}
          change={this.handleChange}
        />
        <input type="submit" value="Send" className="contact-form--button" />
      </form>
    );
  }
}

export default ContactForm;
