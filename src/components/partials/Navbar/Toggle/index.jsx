import React from "react";
import "./styles.scss";

const Toggle = ({ toggled, onClick }) => {
  const toggleClassName = `toggle${toggled ? " toggled" : ""}`;

  return (
    <div className={toggleClassName} onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default Toggle;
