import React from 'react';
import "./MobileApp.css";

export default function MobileApp(){
    return(
        <div className="container">
            <div className="mobileApp-section ">
                <div className="mobileApp-img col-5">
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