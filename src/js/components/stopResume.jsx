
import React, { useState, useEffect } from "react";


const stopResume = () => {
  const count = 0;
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateSeconds = (aCounter, placeValue) => {
    return Math.floor(aCounter / placeValue) % 10;
  };

  return (
    <div className="container text-center mt-5 d-flex justify-content-center">
      
    <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3 rounded shadow-lg">
      
      <div className="p-3 mx-1 border border-white rounded display-4">
        {<i><i class="fa-regular fa-clock"></i></i>}
      </div>
      <div className="p-3 mx-1 border border-white rounded display-4">
        {calculateSeconds(counter, 100000)}
      </div>
      <div className="p-3 mx-1 border border-white rounded display-4">
        {calculateSeconds(counter, 10000)}
      </div>
      <div className="p-3 mx-1 border border-white rounded display-4">
        {calculateSeconds(counter, 1000)}
      </div>
      <div className="p-3 mx-1 border border-white rounded display-4">
        {calculateSeconds(counter, 100)}
      </div>
      <div className="p-3 mx-1 border border-white rounded display-4">
        {calculateSeconds(counter, 10)}
      </div>
      <div className="p-3 mx-1 border border-white rounded display-4">
        {calculateSeconds(counter, 1)}
      </div>
    </div>
    </div>
  );
};

export default Home;




