import React from 'react';


const NavBar = () => {
    return (
        <nav className="navbar fixed">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
            </a>
            <div className="links">
              <a className="nav-item nav-link" href="/">Home</a>
              
              <a className="nav-item nav-link" href="/#waitlist">Waitlist</a>
            </div>
          </div>
        </nav>
      );
}

export default NavBar;
