import React from 'react';
import '../styles/scss/Header.scss';
import { Link } from 'react-router-dom';

let msg = 'menu button'

const alertFunc = () => {
 console.log(msg);
  alert(msg);
}

const menuFunc = () => {
  document.getElementById("dropdown").classList.toggle("show");
  console.log(menuFunc, "menuFunc");
}

window.onClick = function(event) {
  if(!event.target.matches(".menu-btn")){
    let dropDowns = document.getElementByClassName('dropdown-content');
    for(let i =0; i<dropDowns.length; i++){
      let openDrop = dropDowns[i];
      if(openDrop.classList.contains('show')){
        openDrop.classList.remove('show');
      }
    }
  }
}


const Header = () => {
  return(
    <div className="header-component">
      <div className="header-body">
      <Link to="/home" className="logo-container">
          <div className="site-logo">
            <div className="logo-bod">
              <span className="logo-span">Mount Atlas</span>
            </div>
          </div>
        </Link>
        <div className="nav-container">
          <nav className="site-nav" id="dropdown">
            <ul className="dropdown-content">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><a href="http://mountatlas.club/#/">Products</a></li>
            </ul>
          </nav>
          </div>
        <div className="menu-btn-container">
          <div className="menu-btn" onClick={menuFunc}></div>
        </div>
      </div>
    </div>
  )
}

export default Header;