import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        </div>
        <div className="footer-links">
          <div>
            <div className="pages">
            <Link to="/tz-website/#waitlist">Waitlist</Link>
            </div>
            <div className="pages">
              <Link to="/tz-website" >Press Inquiries</Link>
            </div>
            <div className="pages">
                <Link to="/tz-website/terms" >Terms of Use</Link>
            </div>
            <div className="pages">
              <Link to="/tz-website" >Privacy Policy</Link>
            </div>
          </div>
          <div>
            <div className="social-media">
              <Link to="/tz-website" >Facebook</Link>
            </div>
            <div className="social-media">
              <Link to="/tz-website" >Twitter</Link>
            </div>
            <div className="social-media">
              <Link to="/tz-website" >Instagram</Link>
            </div>
            <div className="social-media">
              <Link to="/tz-website" >LinkedIn</Link>
            </div>
            <div className="social-media">
              <Link to="/tz-website" >YouTube</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-note">
        <span>© 2020 TranZsend LLC. All rights reserved.</span>
        <br />
        <p>
          The TranZsend card is issued by WebBank, Member FDIC, pursuant to a
          license from Mastercard International. TranZsend Checking is provided
          through Evolve Bank & Trust, Member FDIC. All text, graphics, audio
          files, code downloadable material, and other works on this website are
          the copyrighted works of Zero Financial, Inc. All right Reserved. Any
          unauthorized redistribution or reproduction of any copyrighted
          materials on this website is strictly prohibited. Other product and
          company names are trademarks of their respective owners. This website
          contains simulated images; actual appearance may vary.
        </p>
      </div>
    </div>
  );
};

export default Footer;
