import React from "react";

const Section = ({ theme = "dark", container = true, children }) => {
  const withContainer = (
    <div className={theme}>
      {container ? <div className="container">{children}</div> : children}
    </div>
  );
  const withoutContainer = (
    <>{container ? <div className="container">{children}</div> : children}</>
  );
  return <section>{container ? withContainer : withoutContainer}</section>;
};

export default Section;
