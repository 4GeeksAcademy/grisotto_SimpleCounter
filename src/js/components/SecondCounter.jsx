
import React from "react";

const SecondCounter = ({ counter }) => {
  const calculateSeconds = (aCounter, placeValue) => {
    return Math.floor(aCounter / placeValue) % 10;
  };

  return (
    <div className="bg-dark text-white p-3 rounded shadow-lg w-50">       
      <div className="d-flex justify-content-center">
        
        <div className="p-3 mx-1 border border-white rounded display-4">
        <i class="fa-regular fa-clock"></i>
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

export default SecondCounter;
