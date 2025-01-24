import React from "react";
import SecondsCounter from "./SecondsCounter";

let seconds = 0; // Initialize the seconds counter

class Home extends React.Component {
  componentDidMount() {
    // Start the timer when the component is mounted
    this.interval = setInterval(() => {
      this.forceUpdate(); // Force a re-render to update the counter
      seconds++;
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {/* Pass the seconds as a prop to SecondsCounter */}
        <SecondsCounter seconds={seconds} />
      </div>
    );
  }
}

export default Home;
