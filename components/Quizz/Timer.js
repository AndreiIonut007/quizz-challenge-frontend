import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ props }) => {
  const [minutes, setMinutes] = useState(parseInt(props.initialMinutes));
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="w-fit">
      {minutes === 0 && seconds === 0 ? (
        props.handler()
      ) : (
        <h1 className="text-white font-semibold text-3xl">
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  );
};

export default Timer;
