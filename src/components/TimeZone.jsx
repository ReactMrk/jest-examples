import React, { useState } from "react";
import { AustraliaTimeZoneButton, NewYorkStateZoneButton, SpainTimeZoneButton } from "./timeZoneButtons";
import { calculateTime } from "./utils";

const Timezone = () => {
  const [time, setTime] = useState({ timeZone: calculateTime(0), text: 'Spain' });
  const [timesChanged, setTimesChanged] = useState(0);
  const updateTime = (addhours, text) => {
    setTime({ timeZone: calculateTime(addhours), text });
    setTimesChanged(prev => ++prev);
  };
  return (
    <section>
      <h2>Time Zone App</h2>
        <div style={{ marginTop: "40px" }}>
          <p>Time in {time.text} is {time.timeZone}</p>
          <p>It has been updated {timesChanged} times</p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <NewYorkStateZoneButton updateTime={updateTime} />
          <AustraliaTimeZoneButton updateTime={updateTime} />
          <SpainTimeZoneButton updateTime={updateTime} />
        </div>
    </section>
  );
};

export default Timezone;