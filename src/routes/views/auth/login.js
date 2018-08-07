import {Card, CardActions, CardContent, Button, Typography, TextField} from '@material-ui/core';
import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Center from 'react-center'


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
      <div style={{ padding: 20 }}>
        <Grid>
          <Row md={4} sm={10} >
            <Center>
              <Card>
                <CardContent>
                  <Typography>
                    Login
                  </Typography>
                  <form>
                  <Row>
                    <TextField
                       required
                       id="required"
                       label="Required"
                       margin="normal"
                       onChange={this.updateEmail}
                      />
                  </Row>
                  <Row>
                    <TextField
                      id="password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.updatePassword}
                    />
                  </Row>
                  <Row>
                  <Center>
                    <Button variant="extendedFab" onClick={() => {this.props.login(this.state.email, this.state.password)}}>
                      Login
                    </Button>
                  </Center>
                  </Row>
                  </form>
                </CardContent>
              </Card>
            </Center>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Login;
