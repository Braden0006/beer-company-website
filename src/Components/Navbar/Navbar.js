import React from "react";
import { IoIosBeer } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar({isOpen}) {
  return (
    <div className="navbar">
      <span className="navbar__logo">
        <IoIosBeer color="#fff" />
      </span>
      <span className="navbar__logo">
        <FiMenu color="#fff" onClick={isOpen} />
      </span>
    </div>
  );
}
