import React from 'react';
import "./Cards.css";

const Cards = () => {
    return(
        <div className="container">
            <div className="cards-section ">
                <div className="animatable bounceIn">
                    <img src={process.env.PUBLIC_URL + '/images/cc-white.png'} alt="credit card"/>
                    <h1>Use Just One Card</h1>
                    <h1>For all</h1>
                    <h1>Your Spending</h1>
                </div>
                <div className="animatable bounceIn">
                    <img src={process.env.PUBLIC_URL + '/images/transfer-white.png'} alt="transfer"/>
                    <h1>Transfer Funds</h1>
                    <h1>from Cards</h1>
                    <h1>or Accounts</h1>
                </div>
                <div className="animatable bounceIn">
                    <img src={process.env.PUBLIC_URL + '/images/send-to-a-friend-white.png'} alt="send money"/>
                    <h1>Send Money</h1>
                    <h1>to a Friend</h1>
                </div>
                <div className="animatable bounceIn">
                    <img src={process.env.PUBLIC_URL + '/images/refer-a-friend-white.png'} alt="refer a friend"/>
                    <h1>Refer A Friend</h1>
                    <h1>earn Rewards</h1>
                </div>
            </div>
        </div>
    );
}

export default Cards;