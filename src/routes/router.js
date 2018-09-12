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
import firebase, {auth, db} from './../backend/firebase.js';
import Theme from './views/styles/headerTheme';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {authenticated, unauthenticated, onautherror, onUpdateTotalDon} from './../actions/actions.js';


class Router extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      user:null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.addAuthError = this.addAuthError.bind(this);

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

  addAuthError = (message) =>
  {
    this.props.dispatch(onautherror(message));
  }

  login(email, password)
  {
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      this.props.dispatch(onautherror(error.message));
    }.bind(this));
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
    db.collection("meta").doc("donations")
    .onSnapshot({
        // Listen for document metadata changes
        includeMetadataChanges: true
    }, function(doc) {
      this.props.dispatch((onUpdateTotalDon(doc.data().totalDonations)));
    }.bind(this));
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
            <Route exact path="/donate" component = {() =>          <MuiThemeProvider theme={Theme}> <Donate total={this.props.totalDon} user={this.state.user} /></MuiThemeProvider>}/>
            <Route exact path="/" component = {() => <Donate user={this.state.user} />}/>
            <Route exact path="/news" component = {News}/>
            <Route exact path="/about" component = {About}/>
            <Route exact path="/auth" component = {() => <Auth login={this.login} logout={this.logout}/>}/>
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
    user:state.user,
    totalDon:state.totalDon
  };
}

export default connect(mapStateToProps)(Router);
