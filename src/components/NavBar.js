import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const NavBar = () => {
    return (
        <nav className="navbar fixed">
          <div className="navbar-nav">
            <Link 
              to="/tz-website/#home" 
              smooth={true} 
              duration={500}
            >
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
            </Link>
            <div className="links">
              <Link 
                className="nav-item nav-link"
                to="/tz-website/#home" 
                smooth={true} 
                duration={500}
              >
                Home
              </Link>
              <Link 
                className="nav-item nav-link"
                to="/tz-website/#waitlist" 
                smooth={true} 
                duration={500} 
              >
              Waitlist
            </Link> 
            </div>
          </div>
        </nav>
      );
}

export default NavBar;
