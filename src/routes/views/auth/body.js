import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import {showNavMenuAction, closeNavMenuAction} from './../../../actions/actions.js';
import {connect} from 'react-redux';
import Login from './login';

class Body extends Component
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
  }

  componentDidMount()
  {
    this.props.dispatch(closeNavMenuAction());

  }
  showProfile()
  {
    return (
      <div>
        <p>Welcome, {this.props.user.email}</p>
      </div>
    )
  }

  validateEmail()
  {
    const length = this.state.email.length;
    if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length >= 0) return 'error';
    return null;
  }

  updateEmail(e)
  {
    this.setState({email:e.target.value})
  }

  updatePassword(e)
  {
    this.setState({password:e.target.value});
  }

  showAuth()
  {
    return (
      /**<Form>
      <FormGroup validationState={this.validateEmail()}>
        <ControlLabel>Email Address</ControlLabel>
        <FormControl
          type="text"
          value={this.state.email}
          placeholder="Enter text"
          onChange={this.updateEmail}
        />
        <ControlLabel>Password</ControlLabel>
        <FormControl
          type="password"
          value={this.state.password}
          placeholder="Enter text"
          onChange={this.updatePassword}
        />
        <Button onClick={() => this.props.login(this.state.email, this.state.password)}>Login</Button>
      </FormGroup>
      </Form>*/
      <Login login={this.props.login} />
    )
  }

  render()
  {
    return (
      <div>
        { this.props.user ? this.showProfile() : this.showAuth()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anchorEl:state.anchorEl,
    user:state.user
  };
}

export default connect(mapStateToProps)(Body);
