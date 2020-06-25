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

                {/* <!-- Begin Mailchimp Signup Form --> */}

                <div id="mc_embed_signup">
                    <form action="https://tranzsend.us10.list-manage.com/subscribe/post?u=24131087bfbc7de64dd678000&amp;id=c05dd4ee89" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <input type="email" name="EMAIL" className="border" id="mce-EMAIL" placeholder="name@email.com" required/>
                            <input type="submit" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" className="border"/>
                        </div>
                    </form>
                </div>

                {/* <!--End mc_embed_signup--> */}

                {/* <form action="https://tranzsend.us10.list-manage.com/subscribe/post?u=24131087bfbc7de64dd678000&amp;id=c05dd4ee89" method="post" className="animate__animated animate__fadeInUp" target="_blank" noValidate>
                    <input type="text" className="border" name="b_24131087bfbc7de64dd678000_c05dd4ee89" placeholder="name@email.com"/>
                    <input type="submit" className="border" value="Join Waitlist"/>
                </form> */}
            </div>
        </div>
    )
}

export default Waitlist;