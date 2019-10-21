import React from "react";

const CrossSectionShape = ({ title, text }) => {
  return (
    <div className="cross-section-shape">
      <div className="cross-section-shape-title">{title}</div>
      <div className="cross-section-shape--shape-container">
        <div className="cross-section-shape--shape-container--text">{text}</div>
        <div className="cross-section-shape--shape-container--shape"></div>
      </div>
    </div>
  );
};

export default CrossSectionShape;
