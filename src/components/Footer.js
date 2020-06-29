import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <div className="footer-logo">
          <a className="nav-item nav-link" href="/">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
          </a>
        </div>
        <div className="footer-links">
          <div>
          <div className="pages">
              <a href="/#waitlist">
                Waitlist
              </a>
            </div>
            <div className="pages">
              <a href="mailto:hello@tranzsend.com">Press Inquiries</a>
            </div>
            <div className="pages">
              <a href="/terms">Terms of Use</a>
            </div>
            <div className="pages">
              <a href="/images/TranZsend-Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </div>
          </div>
          <div>
            <div className="social-media">
              <a href="https://www.facebook.com/TranZsend-104049194706280" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            <div className="social-media">
              <a href="https://twitter.com/TranZsendApp" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <div className="social-media">
              <a href="https://www.instagram.com/tranzsend/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="social-media">
              <a href="https://www.linkedin.com/company/tranzsend/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="social-media">
              <a href="https://www.youtube.com/user/Tranzsendapp" target="_blank" rel="noopener noreferrer">YouTube</a>
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
