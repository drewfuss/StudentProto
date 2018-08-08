import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Donate from './donate';
import News from './news'
import About from './about';
import Auth from './auth';
import Funded from './funded';
import Error from './error';
import Header from './views/header';
import Contact from './contact';
import firebase, {auth} from './../backend/firebase.js';
import Theme from './views/styles/headerTheme';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {authenticated, unauthenticated} from './../actions/actions.js';



class Router extends Component {

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
        this.props.dispatch(authenticated(user));
      }
      else {
        console.log("LOG OUT");
        this.props.dispatch(unauthenticated());
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
      this.props.dispatch(unauthenticated());
    });
  }

  componentWillMount()
  {

  }

  render()
  {
    return(
      <BrowserRouter>
        <div>
          <MuiThemeProvider theme={Theme}>
            <Header />
          </MuiThemeProvider>
          <Switch>
            <Route exact path="/donate" component = {() => <Donate user={this.state.user} />}/>
            <Route exact path="/" component = {() => <Donate user={this.state.user} />}/>
            <Route exact path="/news" component = {News}/>
            <Route exact path="/about" component = {About}/>
            <Route exact path="/auth" component = {() => <Auth login={this.login} logout={this.logout}/>}/>
            <Route exact path="/funded" component = {Funded}/>
            <Route exact path="/contact" component = {Contact}/>
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) =>
{
  return {
    user:state.user
  };
}

export default connect(mapStateToProps)(Router);
