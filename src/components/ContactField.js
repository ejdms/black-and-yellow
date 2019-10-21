import React from "react";

const ContactField = props => {
  const { value, name, type, change } = props;
  let field;
  switch (type) {
    case "inputText":
      field = (
        <input
          className="contact-form--input"
          type="text"
          value={value}
          onChange={e => change("email", e)}
        />
      );
      break;
    case "textarea":
      field = (
        <textarea
          className="contact-form--input"
          value={value}
          onChange={e => change("message", e)}
        />
      );
      break;
    default:
      field = null;
      break;
  }
  return (
    <div className="contact-form--field">
      <label>
        <span>{name}</span>
        {field}
      </label>
    </div>
  );
};

export default ContactField;
