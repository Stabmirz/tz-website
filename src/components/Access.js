import React from 'react';
import "./Access.css"

const Access = () => {
    return ( 
        <div className="access container">
            <div className="access-section">
                <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/smallbluegeo.png"})`}} ></div>
                <div>
                    <h1>Have access to all your money</h1>
                    <h1>with TranZend Card</h1>
                    <h1>and use however you wish,</h1>
                    <h1>for in-stores or online purchases.</h1>
                    <img src={process.env.PUBLIC_URL + '/images/products-are-paid.jpg'} className="paid"alt="cards" />
                    <img src={process.env.PUBLIC_URL + '/images/online-shopping.jpg'} className="online-shopping" alt="cards" />
                </div>
            </div>
        </div>
     );
}
 
export default Access;