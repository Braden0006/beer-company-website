import React from "react";
import "./Business.css";

export default function Business() {
  return (
    <div className="business">
      <div className="business__image"></div>
      <div className="business__info">
        <h2 className="business__info__title">Welcome to Oil City</h2>
        <p className="business__info__description">
          Based in Casper, Wyoming, and ready to bring the best tasting beer
          that's been brought here
        </p>
      </div>
    </div>
  );
}
