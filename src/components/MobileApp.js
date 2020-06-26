import React from "react";
import "./MobileApp.css";

const MobileApp = () => {
  return (
    <div className="container">
      <div className="mobileApp-section ">
        <div
          className="mobileApp-img animatable fadeInLeft"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/backgroundcolumn.png"
            })`,
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/app-transactions.png"}
            alt="mobile-app"
          />
        </div>
        <div className="mobileApp-text">
          <h1 className="animatable fadeInRight">Manage</h1>
          <h1 className="subheader animatable fadeInRight">
            All Of Your Many Cards or Accounts with Just One App
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
