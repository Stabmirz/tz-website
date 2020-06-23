import React from 'react';
import "./MobileApp.css";

const MobileApp = () => {
    return(
        <div className="container">
            <div className="mobileApp-section ">
                <div className="mobileApp-img col-5" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/backgroundcolumn.png"})`}}>
                    <img src={process.env.PUBLIC_URL + '/images/app-transactions.png'} alt="mobile-app"/>
                </div>
                <div className="mobileApp-text col-6">
                    <h1>Manage</h1>
                    <h1 className="subheader">All Of Your Many Cards or Accounts with Just One App</h1>
                </div>
            </div>
        </div>
    );
}

export default MobileApp;