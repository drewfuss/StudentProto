import {Card, CardActions, CardContent, Button, Typography, TextField} from '@material-ui/core';
import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Center from 'react-center'
import firebase, {googleAuth, auth} from './../../../backend/firebase';
import {clearautherror, onautherror} from './../../../actions/actions';
import {connect} from 'react-redux';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import {PageHeader} from 'react-bootstrap';
import './styles/login.css';

class Login extends Component
{

  constructor(props)
  {
    super(props);
    this.state={
      registering: this.props.registering,
      email:'',
      password:'',
      passRetype:''
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordRetype = this.updatePasswordRetype.bind(this);
    this.loginGoogle = this.loginGoogle.bind(this);
  }

  componentWillMount()
  {
    this.props.dispatch(clearautherror());
  }

  onCreate()
  {
    if(this.state.password != this.state.passRetype)
    {
      this.props.dispatch(onautherror('Passwords must match'));
      return;
    }
    auth.createUserWithEmailAndPassword(this.state.email.trim(), this.state.password.trim()).catch(function(error) {
      // Handle Errors here.
      let errorMessage = error.message;
      if(errorMessage) this.props.dispatch(onautherror(errorMessage));
    }.bind(this));
  }

  loginGoogle()
  {
    firebase.auth().signInWithPopup(googleAuth).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
    }).catch(function(error) {
      // // Handle Errors here.
      // let errorCode = error.code;
       if(error && error.message) this.props.dispatch(onautherror(error.message));
      // // The email of the user's account used.
      // let email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // let credential = error.credential;
    }.bind(this));
  }

  updateEmail(e)
  {
    this.setState({email:e.target.value})
  }

  updatePassword(e)
  {
    this.setState({password:e.target.value});
  }
  updatePasswordRetype(e)
  {
    this.setState({passRetype:e.target.value});
  }

  handleLogin()
  {
    this.props.dispatch(clearautherror());
    if(this.state.registering)
    {
      this.setState({registering:null});
      return;
    }

    this.props.login(this.state.email, this.state.password);
  }

  handleRegister()
  {
    this.props.dispatch(clearautherror());
    this.setState({registering:true});
  }

  render()
  {
    return (
      <div className='container'>
      <Card className='col-md-4 col-md-offset-4  col-sm-6 col-sm-offset-3 col-xs-12'>
          <CardContent className='col-md-12'>
            <PageHeader className='text-center'>
              Login
            </PageHeader>
            <div className='row'>
              <TextField
                className='col-xs-12 inputAuth'
                 id="required"
                 label="Username"
                 margin="normal"
                 onChange={this.updateEmail}
               />
             </div>
             <div className='row'>
              <TextField
                className='col-xs-12 inputAuth'
                  id="required"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  onChange={this.updatePassword}
              />
            </div>
            {this.state.registering ?

            (
                      <div>
                       <div className='row'>
                         <TextField
                           className='col-xs-12 inputAuth'
                             id="required"
                             label="Retype Password"
                             type="password"
                             autoComplete="current-password"
                             margin="normal"
                             onChange={this.updatePasswordRetype}
                         />
                       </div>
                       <Center>
                         <Button className='col-xs-10' style={{fontSize:'1em'}} variant="outlined" color="primary" onClick={() => { this.onCreate()}}>
                           Create Account
                         </Button>
                       </Center>
                       <Center>
                         <Button className='col-xs-10' id='btnRegister' style={{fontSize:'1em'}} variant="outlined" color="primary" onClick={() => {this.handleLogin()}}>
                           Have Account? Login
                         </Button>
                       </Center>
                       </div>
                     ) : (
                         <div>
                         <Center>
                           <Button className='col-xs-8'style={{fontSize:'1em'}} variant="outlined" color="primary" onClick={() => {this.handleLogin()}}>
                             Login
                           </Button>
                         </Center>
                         <Center>
                           <Button className='col-xs-8' id='btnRegister'style={{fontSize:'1em'}} variant="outlined" color="primary" onClick={() => {this.handleRegister()}}>
                             Register
                           </Button>
                         </Center>
                         </div>
                       )}
            {this.props.authError ? (<Typography id='colorRed'>{this.props.authError}</Typography>) : null}
            <PageHeader className='text-center'>
              <small>OR</small>
            </PageHeader>
            <Center>
              <GoogleLoginButton onClick={() => {this.loginGoogle()}} />
            </Center>
            <Center>
              <FacebookLoginButton onClick={() => alert("Coming Soon")} />
            </Center>
        </CardContent>
      </Card>
    </div>
    )
  }
}

// const mapDispatchToProps = {
//   authenticated,
//   unauthenticated
// };

const mapStateToProps = (state) => {
  return {
    authError:state.authError
  };
}
export default connect(mapStateToProps)(Login);

// export default connect(null, mapDispatchToProps)(Login);
