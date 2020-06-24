import React from 'react';
import {Link} from 'react-scroll';


const NavBar = () => {
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
                to="waitlist" 
                spy={true} 
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
