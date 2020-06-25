import React from 'react';
import "./Waitlist.css"

const Waitlist = () => {
    return(
        <div className="waitlist container" id="waitlist">
            <h1 className="animate__animated animate__fadeInLeft">
                Join the Waitlist
            </h1>
            <div className="join-waitlist animate__animated animate__fadeInUp">
                <h5>Be one of the first to access TranZsend.</h5>
                <br/>
                <form className="animate__animated animate__fadeInUp">
                    <input type="text" className="border" placeholder="name@email.com"/>
                    <input type="submit" className="border" value="Join Waitlist"/>
                </form>
            </div>
        </div>
    )
}

export default Waitlist;