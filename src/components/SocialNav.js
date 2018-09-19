import React from 'react';

import "../styles/scss/SocialNav.scss";

const SocialNav = () => {
  return(
    <div className="socialnav-component">
      <nav className="snav">
        <div className="fb sociacon"></div>
        <div className="insta sociacon"></div>
        <div className="gmail sociacon"></div>
      </nav>
    </div>
  )
}

export default SocialNav;