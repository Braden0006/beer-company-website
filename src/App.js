import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Business from "./Components/Business/Business";
import Hours from "./Components/Hours/Hours";

import "./App.css";

function App() {
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <Homepage />
        <Business />
        <Hours />
      </div>
    </div>
  );
}

export default App;
