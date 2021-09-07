import React from "react";
import "./DealsComponent.scss";
import { useHistory } from "react-router-dom";

function DealsComponent() {
  let history = useHistory();

  const handleRightClick = () => {
    history.push("/discount15");
  };
  const handleLeftClick = () => {
    history.push("/ProductListing");
  };

  return (
    <div className="Deals-wrapper">
      <div className="Deals-card-left">
        <span className="Deals-label">new arivals</span>
        <span className="Deals-title">free</span>
        <span className="Deals-title2">shipping</span>
        <button onClick={handleLeftClick} className="Deals-button">
          shop now
        </button>
      </div>
      <div className="Deals-card-right">
        <span className="Deals-label">hot deals</span>
        <span className="Deals-title">extra</span>
        <span className="Deals-price">15% OFF</span>
        <button onClick={handleRightClick} className="Deals-button">
          shop now
        </button>
      </div>
    </div>
  );
}

export default DealsComponent;
