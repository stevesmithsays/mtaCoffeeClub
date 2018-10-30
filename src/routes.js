import React from 'react';
import {Switch, Route } from 'react-router-dom';

import About from "./components/About";
import Products from "./components/Products";
import Schedule from "./components/Schedule";
import Home from "./components/Home";
import Blog from "./components/Blog";

export default(
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/schedule" component={Schedule}/> 
    <Route exact path="/blog" component={Blog}/>
  </Switch>
)