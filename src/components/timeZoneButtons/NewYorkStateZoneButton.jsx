import React, { useState } from "react";

const NewYorkStateZoneButton = ({ updateTime }) => {
  const [timesUsed, setTimesUsed] = useState(0);
  const setTime = () => {
    setTimesUsed(prev => ++prev);
    updateTime(-6, 'New York');
  };
  return (
    <div className="inline">
      <button onClick={() => setTime()}>New York time</button>
      <p>This button has been used {timesUsed} times</p>
    </div>
  )
};

export default NewYorkStateZoneButton;