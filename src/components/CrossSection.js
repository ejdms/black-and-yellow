import React from "react";

const CrossSection = ({ title, text }) => {
  return (
    <div className="cross-section">
      <div className="cross-section--title">{title}</div>
      <div className="cross-section--body">{text}</div>
    </div>
  );
};

export default CrossSection;
