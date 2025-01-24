import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as regularClock } from "@fortawesome/free-regular-svg-icons";

const SecondsCounter = ({ seconds }) => {
  // Convert the seconds into a zero-padded 6-digit string
  const formattedSeconds = seconds.toString().padStart(6, "0");

  return (
    <div className="counter-container">
      <div className="clock-icon">
        <FontAwesomeIcon icon={regularClock} />
      </div>
      {/* Render each digit directly from the formatted string */}
      <div className="digit-box">{formattedSeconds[0]}</div>
      <div className="digit-box">{formattedSeconds[1]}</div>
      <div className="digit-box">{formattedSeconds[2]}</div>
      <div className="digit-box">{formattedSeconds[3]}</div>
      <div className="digit-box">{formattedSeconds[4]}</div>
      <div className="digit-box">{formattedSeconds[5]}</div>
    </div>
  );
};

export default SecondsCounter;

