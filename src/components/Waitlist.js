import React from 'react';
import "./Waitlist.css"

export default function Waitlist(){
    return(
        <div className="waitlist container" id="#waitlist">
            <h1>
                Join the Waitlist
            </h1>
            <div className="join-waitlist">
                <h5>Be one of the first to access TanZsend.</h5>
                <br/>
                <form>
                    <input type="text" className="border" placeholder="name@email.com"/>
                    <input type="submit" className="border" value="Join Waitlist"/>
                </form>
            </div>
        </div>
    )
}