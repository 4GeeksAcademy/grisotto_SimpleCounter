import React, { useState, useEffect } from "react";
import SecondCounter from "./SecondCounter";
import CounterControls from "./CounterControls";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsrunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning){
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning]);



  return (
    <div className="container text-center mt-5 d-flex flex-column align-items-center">
      <SecondCounter counter={counter} /> 
      <CounterControls 
        isRunning={isRunning} 
        setIsRunning={setIsrunning} 
        setCounter={setCounter} 
      />
    </div>
  );
};

export default Home;

