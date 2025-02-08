import React from "react";

const Home = (props) => {
  return (
    <div className="bigCounter mx-auto" > 

      <div className= "calendar"> 
          <i className="fa-regular fa-clock fa"> 
          </i>
      </div>
      <div className="fourthDigit">
        {Math.floor(props.seconds/10000) % 10}
      </div>
      <div className="thirdDigit">
        {Math.floor(props.seconds/1000) % 10}
      </div>
      <div className="secondDigit">
        {Math.floor(props.seconds/100) % 10}
      </div>
      <div className="firstDigit">
        {Math.floor(props.seconds/10) % 10}
      </div>

    </div>
  );

};

export default Home;
