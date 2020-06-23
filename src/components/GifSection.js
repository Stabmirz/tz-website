import React from 'react';
import GifPlayer from 'react-gif-player';
import "./GifSection.css"

export default function GifSection(){
    return(
        <div className="gif-section container">
            <div className="gif-container">
                <div className="text">
                    <h1>Spend</h1>
                    <h1 className="subheader">from All Your Cards or Accounts with Just One Card</h1>
                </div>
                <div className="img">
                    <GifPlayer gif="./images/debit-card.gif" autoplay="true"/>
                </div>
            </div>
        </div>
    );
}