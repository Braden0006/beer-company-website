import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Business from "./Components/Business/Business";
import Band from "./Components/Band/Band";
import FoodTruck from "./Components/FoodTruck/FoodTruck";
import Contact from "./Components/Contact/Contact";
import Hours from "./Components/Hours/Hours";

import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  // Function that toggles the open state to true or false
  const isOpen = () => {
    setOpen(!open);
  };

  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className="app-container">
              <Navbar open={open} isOpen={isOpen} />
              <Homepage open={open} />
              <Business />
              <Band />
              <FoodTruck />
            </div>
          </div>
        }
      />

      <Route path="/contact" element={<Contact />} />
      <Route path="/hours" element={<Hours />} />
    </Routes>
  );
}

export default App;
