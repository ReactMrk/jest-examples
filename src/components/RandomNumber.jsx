import React, { useState } from "react";
import { getRandomNumber, isPair } from "./utils";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const text = isPair(randomNumber) ? "pair" : "odd";
  return (
    <section>
      <h2>Random app</h2>
      <div style={{ display: "ruby" }}>
        <button onClick={() => {setRandomNumber(getRandomNumber())}}>
          Give me a different number
        </button>
        <p>
          Number {randomNumber} is {text}
        </p>
      </div>
    </section>
  );
};

export default RandomNumber;
