import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home"; // Correct relative path to Home.jsx
import "../styles/index.css"; // Import global CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);

