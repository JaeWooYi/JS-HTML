import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("Component Update");
  // function updateTime() {
  //   setTime(time + 1); // 클릭할때마다 1씩 증가
  // }
  React.useEffect(function () {
    //   setTime(time + 1);
    // }, [time]); // 무한으로 됨
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}+</h3>
      {/* <button onClick={updateTime}>increase 1</button> */}
      <button>increase 1</button>
    </div>
  );
}

export default TimerComponent;
