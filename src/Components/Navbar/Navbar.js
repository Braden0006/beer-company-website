import React from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

import { IoIosBeer } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import "./Navbar.css";

export default function Navbar({ open, isOpen }) {
  return (
    <>
      <div className="navbar">
        <Link className="navbar__beer-logo" to="/">
          <IoIosBeer color="#fff" />
        </Link>
        <span className="navbar__menu-logo">
          <FiMenu
            className={open ? "hidden" : ""}
            color="#fff"
            onClick={isOpen}
          />
        </span>
        <Menu open={open} isOpen={isOpen} />
      </div>
    </>
  );
}
