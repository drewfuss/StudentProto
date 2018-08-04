import React, { Component } from 'react';
import {Navbar, NavItem, Nav, Button}  from 'react-bootstrap';
import Center from 'react-center';
import './styles/title.css';

class Title extends Component
{
  constructor(props)
  {
    super(props);
  }

  getLoggedIn()
  {
    return "Profile";
  }

  getLoggedOut()
  {
    return "Log In";
  }

  render()
  {
    return (
      <div>
      <Navbar>
        <Center>
        <Nav>
            <NavItem href="funded">
              Funded
            </NavItem>
            <NavItem href="/about">
              About Us
            </NavItem>
            <NavItem className="donate" href="#">
              <Button bsStyle="warning" bsSize="large"  onClick={() => { window.location = '/donate'; }}>
                DONATE
              </Button>
            </NavItem>
            <NavItem href="/news">
              News
            </NavItem>
            <NavItem className='pull-right' href="/auth">
              {this.props.user ? this.getLoggedIn() : this.getLoggedOut() }
            </NavItem>
        </Nav>
        </Center>
        </Navbar>

      </div>
    )
  }
}

export default Title;
