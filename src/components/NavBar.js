import React, { Component } from 'react';
// import {Link } from "react-router-dom";
import {Link} from 'react-scroll';
// const ScrollLink = Scroll.ScrollLink;


class NavBar extends Component {

  render() { 
    return (
        <nav className="navbar fixed">
          <div className="navbar-nav">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500}
            >
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
            </Link>
            <div className="links">
              <Link 
                className="nav-item nav-link"
                to="home" 
                spy={true} 
                smooth={true} 
                duration={500}
              >
                Home
              </Link>
              <Link 
                className="nav-item nav-link"
                to="whitelist" 
                spy={true} 
                smooth={true} 
                duration={500} 
              >
              Whitelist
            </Link> 
            </div>
          </div>
        </nav>
      );
  }
}

export default NavBar;
