import React from 'react';
import SocialNav from "./SocialNav";

import '../styles/scss/Hero.scss';

const Hero = () => {
  return(
    <div className="hero-component">
    <SocialNav/>
      <div className="hero-body">
        <h1>just for you</h1>
      </div>
    </div>
  )
}

export default Hero;