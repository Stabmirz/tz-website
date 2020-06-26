import React from "react";
import GifPlayer from "react-gif-player";
import "./GifSection.css";

const GifSection = () => {
  return (
    <div className="gif-section container">
      <div className="gif-container">
        <div className="text">
          <h1 className="animatable fadeInLeft">Spend</h1>
          <h1 className="subheader animatable fadeInLeft">
            from All Your Cards or Accounts with Just One Card
          </h1>
        </div>
        <div className="img animatable fadeInUp">
          <GifPlayer
            gif={process.env.PUBLIC_URL + "/images/debit-card.gif"}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default GifSection;
