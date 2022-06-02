import React from "react";
import "./Homepage.css";

export default function Homepage({children}) {
  return (
    <div className="homepage">
      <h1 className="homepage__title">NOW OPEN</h1>
      <div className="homepage__image"></div>
    </div>
  );
}
