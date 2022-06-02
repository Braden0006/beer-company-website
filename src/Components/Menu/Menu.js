import React from "react";
import { AiOutlineClose } from "react-icons/ai"
import "./Menu.css";

export default function Menu() {

  return (
    <div className="background">
      <span className="menu__icon">
        <AiOutlineClose />
      </span>
      <div className="menu">
        <h2 className="menu__link">Home</h2>
        <h2 className="menu__link">Contact</h2>
      </div>
    </div>
  );
}
