import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Business from "./Components/Business/Business";

import "./App.css";

function App() {
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <Homepage />
        <Business />
      </div>
    </div>
  );
}

export default App;
