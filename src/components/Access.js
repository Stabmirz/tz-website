import React from "react";
import "./Access.css";

const Access = () => {
  return (
    <div className="access container">
      <div className="access-section">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/smallbluegeo.png"}
            alt="mobile-app"
          />
        </div>
        <div>
          <h1 className="animatable fadeInRight">
            Have access to all your money
          </h1>
          <h1 className="animatable fadeInRight">with TranZend Card</h1>
          <h1 className="animatable fadeInRight">and use however you wish,</h1>
          <h1 className="animatable fadeInRight">
            for in-stores or online purchases.
          </h1>
          <img
            src={process.env.PUBLIC_URL + "/images/products-are-paid.jpg"}
            className="paid animatable fadeInDown"
            alt="cards"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/online-shopping.jpg"}
            className="online-shopping animatable fadeInUp"
            alt="cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Access;
