import React, { useState } from "react";

const AustraliaTimeZoneButton = ({ updateTime }) => {
  const [timesUsed, setTimesUsed] = useState(0);
  const setTime = () => {
    setTimesUsed(prev => ++prev);
    updateTime(11, 'Australia');
  };
  return (
    <div className="inline">
      <button onClick={() => setTime()}>Australia time</button>
      <p>This button has been used {timesUsed} times</p>
    </div>
  )
};

export default AustraliaTimeZoneButton;