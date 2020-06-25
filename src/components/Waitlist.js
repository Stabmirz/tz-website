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
{/* 
                <form action="https://tranzsend.us10.list-manage.com/subscribe/post?u=24131087bfbc7de64dd678000&amp;id=c05dd4ee89" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                    
                        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <input type="text" name="b_24131087bfbc7de64dd678000_c05dd4ee89" value=""/>
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
                    </div>
                </form> */}

                <form action="https://tranzsend.us10.list-manage.com/subscribe/post?u=24131087bfbc7de64dd678000&amp;id=c05dd4ee89" method="post" className="animate__animated animate__fadeInUp" target="_blank" noValidate>
                    <input type="text" className="border" placeholder="name@email.com"/>
                    <input type="submit" className="border" value="Join Waitlist"/>
                </form>
            </div>
        </div>
    )
}

export default Waitlist;