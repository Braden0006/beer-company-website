import React from "react";
import "./Hours.css";

export default function Hours() {
  return (
    <div className="hours">
      <h2 className="hours__title">Hours</h2>
      <div className="hours__grid">
        <span>MON</span>
        <span>4pm - 9pm</span>

        <span>TUE</span>
        <span>4pm - 9pm</span>

        <span>WED</span>
        <span>4pm - 9pm</span>

        <span>THU</span>
        <span>4pm - 9pm</span>

        <span>FRI</span>
        <span>3pm - 11pm</span>

        <span>SAT</span>
        <span>11am - 11pm</span>

        <span>SUN</span>
        <span>12pm - 8pm</span>
      </div>
    </div>
  );
}
