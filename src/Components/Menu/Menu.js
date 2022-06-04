import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu({ open, isOpen }) {

  const variants = {
    visible: {
      x: open ? 0 : 1000,
      transition: {
        staggerChildren: 0.8,
        transition: "tween"
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="background"
        initial={{ x: 1000 }}
        animate="visible"
        variants={variants}
        // transition={{ transition: "tween" }}
      >
        <span className="menu__icon">
          <AiOutlineClose onClick={isOpen} />
        </span>
        <div className="menu">
          <Link class="menu__a-tag" to="/">
            <h2 className="menu__link">Home</h2>
          </Link>

          <Link className="menu__a-tag" to="/contact">
            <h2 className="menu__link">Contact</h2>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
