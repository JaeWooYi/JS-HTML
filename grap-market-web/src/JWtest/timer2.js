import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("Component Update");
  function updateTime() {
    setTime(time + 1); // 클릭할때마다 1씩 증가
  }
  return (
    <div>
      <h3>{time}+</h3>
      <button onClick={updateTime}>increase 1</button>
    </div>
  );
}

export default TimerComponent;
