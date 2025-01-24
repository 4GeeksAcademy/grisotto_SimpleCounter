import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home"; // Import the Home component
import "../styles/index.css"; // Import the global CSS

// Render the Home component into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
