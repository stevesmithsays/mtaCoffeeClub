import React from 'react';
import Hero from "./Hero";
import About from "./About";
import Blog from "./Blog";
import Schedule from "./Schedule"

import "../styles/scss/Home.scss";

const Home = () => {
  return(
    <div>
      <Hero/>
      <About/>
      <Schedule/>
      <Blog/>
    </div>
  )
}

export default Home;