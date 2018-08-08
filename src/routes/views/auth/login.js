import {Card, CardActions, CardContent, Button, Typography, TextField} from '@material-ui/core';
import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Center from 'react-center'
import firebase, {googleAuth} from './../../../backend/firebase';
import {authenticated, unauthenticated} from './../../../actions/actions';
import {connect} from 'react-redux';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import {PageHeader} from 'react-bootstrap';

const inputProps = {
  fontSize: 300,
};
class Login extends Component
{

  constructor(props)
  {
    super(props);
    this.state={
      email:'',
      password:''
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.loginGoogle = this.loginGoogle.bind(this);
  }

  loginGoogle()
  {
    firebase.auth().signInWithPopup(googleAuth).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
    }).catch(function(error) {
        if(error)
        {
          alert(error.code);
        }

      // // Handle Errors here.
      // let errorCode = error.code;
      // let errorMessage = error.message;
      // // The email of the user's account used.
      // let email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // let credential = error.credential;
      // alert(errorMessage);
    });
  }

  updateEmail(e)
  {
    this.setState({email:e.target.value})
  }

  updatePassword(e)
  {
    this.setState({password:e.target.value});
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
                className='col-xs-12'
                 required
                 id="required"
                 label="Username"
                 margin="normal"
                 inputStyle={{ fontSize: "50px" }}
                 onChange={this.updateEmail}
               />
             </div>
             <div className='row'>
              <TextField
                className='col-xs-12'
                  id="required"
                  label="Password"
                  inputProps={inputProps}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  onChange={this.updatePassword}
              />
            </div>
            <Center>
              <Button variant="outlined" color="primary" onClick={() => {this.props.login(this.state.email, this.state.password)}}>
                Login
              </Button>
            </Center>
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

const mapDispatchToProps = {
  authenticated,
  unauthenticated
};

export default connect(null, mapDispatchToProps)(Login);
