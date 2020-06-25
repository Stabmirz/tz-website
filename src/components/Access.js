import React from "react";
import "./Access.css";

const Access = () => {
  return (
    <div className="access container">
      <div className="access-section">
        <div
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/smallbluegeo.png"
            })`,
          }}
        ></div>
        <div>
            <h1 className="animate__animated animate__fadeInRight">Have access to all your money</h1>
            <h1 className="animate__animated animate__fadeInRight">with TranZend Card</h1>
            <h1 className="animate__animated animate__fadeInRight">and use however you wish,</h1>
            <h1 className="animate__animated animate__fadeInRight">for in-stores or online purchases.</h1>
          <img
            src={process.env.PUBLIC_URL + "/images/products-are-paid.jpg"}
            className="paid animate__animated animate__fadeInDown"
            alt="cards"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/online-shopping.jpg"}
            className="online-shopping animate__animated animate__fadeInUp"
            alt="cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Access;
