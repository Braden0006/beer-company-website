import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Business from "./Components/Business/Business";
import Hours from "./Components/Hours/Hours";
import Contact from "./Components/Contact/Contact";

import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  // Function that toggles the open state to true or false
  const isOpen = () => {
    setOpen(!open);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className="app-container">
              <Navbar open={open} isOpen={isOpen} />
              <Homepage />
              <Business />
              <Hours />
            </div>
          </div>
        }
      />

      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/facebook" element={() => {
        window.location.href = 'https://www.facebook.com/pages/category/Brewery/Oil-City-Beer-Company-891799434263884/';
        return null
      }} /> */}
    </Routes>
  );
}

export default App;
