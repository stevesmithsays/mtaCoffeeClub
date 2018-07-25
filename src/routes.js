import React from 'react';
import {Switch, Route } from 'react-router-dom';

import About from "./components/About";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Schedule from "./components/Schedule";

export default(
  <Switch>
    <Route exact path="/" component={About}/>
    <Route exact path="/Products" component={Products}/>
    <Route exact path="/Schedule" component={Schedule}/> 
  </Switch>
)