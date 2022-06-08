import React from "react";

import "./FoodTruck.css";

export default function FoodTruck() {
  return (
    <div className="food-truck">
      <div className="food-truck__image"></div>
      <div className="food-truck__info">
        <h2 className="food-truck__info__title">Food Truck</h2>
        <p className="food-truck__info__description">
          Sit down, drink some great beer, and eat delicous food served from our
          food truck!
        </p>
      </div>
    </div>
  );
}
