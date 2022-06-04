import React from "react";

import { Link } from "react-router-dom";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Link to="/">
        <button className="back-home">Back Home</button>
      </Link>
      <div className="contact">
        <h1 className="contact__title">Contact</h1>
        <div className="contact__grid">
          <form action="" className="contact__form">
            <input
              className="contact__input"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="contact__input"
              type="email"
              placeholder="Email"
            />
            <input className="contact__input" type="text" placeholder="Phone" />
            <textarea
              className="contact__input"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input className="contact__submit" type="submit" />
          </form>

          <div className="contact__footer">
            <span className="contact__footer__address">
              <FaMapMarkerAlt /> 4155 Legion Lane Casper, WY 82609
            </span>
            <span className="contact__footer__phone">
              <BsFillTelephoneFill /> (307)337-1177
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
