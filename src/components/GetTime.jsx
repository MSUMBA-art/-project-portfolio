import "./getTime.css"

import React, { useState } from 'react'







function GetTime() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="getTime-container">
      <h2>{time}</h2>
      {/* <button onClick={updateTime}>GET TIME</button> */}
    </div>
  );
}

export default GetTime;
