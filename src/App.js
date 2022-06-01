import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import "./App.css";

function App() {
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
