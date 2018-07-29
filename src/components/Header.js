import React from 'react';
import '../styles/scss/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="header-component">
      <div className="header-body">
      <Link to="/home">
          <div className="site-logo">
            <div className="logo-bod">
              <span className="logo-span">Mount Atlas</span>
            </div>
          </div>
        </Link>
        <div className="nav-container">
          <nav className="site-nav">
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><a href="http://mountatlas.club/#/">Products</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;