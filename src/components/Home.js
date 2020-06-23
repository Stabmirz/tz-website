import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="hero container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.png"})`}}>
      <div className="hero-section">
        <div className="hero-img">
          <img src={process.env.PUBLIC_URL + '/images/ccds.png'} alt="cards" />
        </div>
        <div className="hero-text">
          <div>
            <h1>Its</h1>
            <h1>Your</h1>
            <h1>Money</h1>
          </div>
          <div>
            <h1>Wherever</h1>
            <h1>You</h1>
            <h1>Want</h1>
            <h1>It</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
