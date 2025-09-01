import React from "react";
import "./styles.css";
import RandomNumber from "./components/RandomNumber";
import Timezone from "./components/TimeZone";
import Timer from "./components/Timer";

const App = () => {
  return ( 
    <div className="App">
      <h1>Testing Jest Examples</h1>
      <RandomNumber />
      <Timezone />
      <Timer />
    </div>
  );
};

export default App;
