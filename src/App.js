import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Business from "./Components/Business/Business";
import Hours from "./Components/Hours/Hours";
import Menu from "./Components/Menu/Menu";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(!open);
    console.log('hi')
  };

  return (
    <div>
      <div className="app-container">
        <Navbar isOpen={isOpen} />
        <Menu open={open} isOpen={isOpen} />
        <Homepage />
        <Business />
        <Hours />
      </div>
    </div>
  );
}

export default App;
