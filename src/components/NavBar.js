import React from "react";
import {Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar fixed">
      <div className="navbar-nav">
        <img src="./images/logo.png" alt="logo" />
        <div className="links">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="#waitlist">
            Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
