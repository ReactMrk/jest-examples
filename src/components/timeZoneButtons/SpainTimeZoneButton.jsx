import React, { useState } from "react";

const SpainTimeZoneButton = ({ updateTime }) => {
  const [timesUsed, setTimesUsed] = useState(0);
  const setTime = () => {
    setTimesUsed(prev => ++prev);
    updateTime(0, 'Spain');
  };
  return (
    <div className="inline">
      <button onClick={() => setTime()}>Spain time</button>
      <p>This button has been used {timesUsed} times</p>
    </div>
  )
};

export default SpainTimeZoneButton;