import React from "react";
import "./Homepage.css";

export default function Homepage({open}) {
  return (
    <div className="homepage" style={{overflowY: open ? 'hidden' : 'scroll'}}>
      <h1 className="homepage__title">NOW OPEN</h1>
      <div className="homepage__image"></div>
    </div>
  );
}
