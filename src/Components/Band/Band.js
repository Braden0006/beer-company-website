import React from "react";
import './Band.css'

export default function Band() {
  return (
    <div className="band">
      <div className="band__image"></div>
      <div className="band__info">
        <h2 className="band__info__title">Live Band</h2>
        <p className="band__info__description">
          Get a chance to listen to amazing and unique musicians live!
        </p>
      </div>
    </div>
  );
}
