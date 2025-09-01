import React, { useState } from "react";

const Timer = () => {
  const [text, setText] = useState("Before Timer");
  const startTimer = () => {
    setTimeout(() => {
      setText("After Timer");
    }, 2000);
  };
  return (
    <section>
      <h2>Timer App</h2>
      <div className="inline">
        <button onClick={() => startTimer()}>Start timer</button>
        <p>{text}</p>
      </div>
    </section>
  )
};

export default Timer;