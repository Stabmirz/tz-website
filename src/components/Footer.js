import React from "react";
import "./Footer.css";
import Terms from "./TermsOfUse";

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
              <a href="/tz-website/#waitlist">Waitlist</a>
            </div>
            <div className="pages">
              <a href="/#">Press Inquiries</a>
            </div>
            <div className="pages">
              <a href="/tz-website/terms">Terms of Use</a>
            </div>
            <div className="pages">
              <a href="/#">Privacy Policy</a>
            </div>
          </div>
          <div>
            <div className="social-media">
              <a href="/#">Facebook</a>
            </div>
            <div className="social-media">
              <a href="/#">Twitter</a>
            </div>
            <div className="social-media">
              <a href="/#">Instagram</a>
            </div>
            <div className="social-media">
              <a href="/#">LinkedIn</a>
            </div>
            <div className="social-media">
              <a href="/#">YouTube</a>
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
