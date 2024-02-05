import { useState, useRef } from "react";

export default function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalIdRef = useRef(null);

  function handleStart() {
    setIsRunning(true);
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(() => {
      setTimer((prev) => prev + 0.01);
    }, 10);
  }

  function handlePause() {
    setIsRunning(false);
    clearInterval(intervalIdRef.current);
  }

  function handleReset() {
    setIsRunning(false);
    clearInterval(intervalIdRef.current);
    setTimer(0);
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl my-5">{timer.toFixed(2)}</h1>
      {!isRunning ? (
        <button className="btn w-[30px] mx-3" onClick={handleStart}>
          <i className="fa-solid fa-play"></i>
        </button>
      ) : (
        <button className="btn w-[30px] mx-3" onClick={handlePause}>
          <i className="fa-solid fa-pause"></i>
        </button>
      )}
      <button className="btn w-[30px] mx-3" onClick={handleReset}>
        <i className="fa-solid fa-rotate-left" />
      </button>
    </div>
  );
}
