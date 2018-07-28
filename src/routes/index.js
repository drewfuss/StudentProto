import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Donate from './donate';
import News from './news'
import About from './about';
import Auth from './auth';
import Funded from './funded';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/donate" component = {Donate}/>
      <Route exact path="/" component = {Donate}/>
      <Route exact path="/news" component = {News}/>
      <Route exact path="/about" component = {About}/>
      <Route exact path="/auth" component = {Auth}/>
      <Route exact path="/funded" component = {Funded}/>
    </Switch>
  </BrowserRouter>
);
