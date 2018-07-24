import React from 'react';
import '../styles/scss/Header.scss';

const Header = () => {
  return(
    <div className="header-component">
      <div className="header-body">
        <div className="site-logo">
          <div className="logo-bod">
            <span className="logo-span">Mount Atlas</span>
          </div>
        </div>
        <div className="nav-container">
          <nav className="site-nav">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Schedule</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;