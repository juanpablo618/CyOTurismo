import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p><b>{subtitle}</b></p>
      {children}
    </div>
  );
};

export default Banner;
