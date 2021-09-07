import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "./HeroSlider.scss";
import { useHistory } from "react-router-dom";

function HeroSlider() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/productlisting");
  };
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div className="slide-1">
            <p>the coolest styles are here</p>
            <button onClick={handleClick}>explore</button>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide-2">
            <p>the coolest styles are here</p>
            <button onClick={handleClick}>explore</button>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide-3">
            <p>the coolest styles are here</p>
            <button onClick={handleClick}>explore</button>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default HeroSlider;
