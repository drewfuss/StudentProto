import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Donate from './donate';
import News from './news'
import About from './about';
import Auth from './auth';
import Funded from './funded';
import Error from './error';
import Contact from './contact';
import firebase, {auth} from './../backend/firebase.js';

export default class Router extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      user:null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    // fetch current user
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("LOGGED IN");
        this.setState({
          user:user
        });
      }
      else {
        this.setState({
          user:null
        });
      }
   });
  }

  login(email, password)
  {
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      console.log("damn");
    });
  }

  logout()
  {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  componentWillMount()
  {

  }

  render()
  {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/donate" component = {() => <Donate user={this.state.user} />}/>
          <Route exact path="/" component = {() => <Donate user={this.state.user} />}/>
          <Route exact path="/news" component = {News}/>
          <Route exact path="/about" component = {About}/>
          <Route exact path="/auth" component = {() => <Auth user={this.state.user} login={this.login} logout={this.logout}/>}/>
          <Route exact path="/funded" component = {Funded}/>
          <Route exact path="/contact" component = {Contact}/>
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}
