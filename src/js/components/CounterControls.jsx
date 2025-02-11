import React from "react";

const CounterControls = ({ isRunning, setIsRunning, setCounter }) => {
  return (
    <div>
      <button
        className={`btn mt-3 ${isRunning ? "btn-danger" : "btn-success"} mx-2`}
        onClick={() => setIsRunning((prev) => !prev)}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="btn btn-warning mt-3"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterControls;
