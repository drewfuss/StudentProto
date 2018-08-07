import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormControlLabel, Menu, MenuItem, FormGroup, AppBar,
  Toolbar, Typography, IconButton, Button}  from '@material-ui/core';
import {withStyles, MenuIcon, AccountCircle} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {showNavMenuAction, closeNavMenuAction, unauthenticated} from './../../actions/actions.js';
import {auth} from './../../backend/firebase';
import './styles/title.css';
import Center from 'react-center';

class Header extends Component
{
  constructor(props)
  {
    super(props);
  }

  handleMenu = event => {
    console.log("handleMenu");
    this.props.dispatch(showNavMenuAction(event.currentTarget));
  };

  handleClose = () => {
    console.log(this.props.user);
    this.props.dispatch(closeNavMenuAction());
  };

  logout = () => {
    auth.signOut()
    .then(() => {
      this.props.dispatch(unauthenticated());
    });
  }

  render()
  {
      const open = Boolean(this.props.anchorEl);

      return (

        <div>
          <AppBar position="static">
            <Center>
            <Toolbar>
            <Link to={'/funded'} style={{ textDecoration: 'none', color:'white' }}>
               <Button><Typography color="secondary">Funded</Typography></Button>
            </Link>
            <Link to={'/news'} style={{ textDecoration: 'none', color:'white' }}>
               <Button><Typography color="secondary">News</Typography></Button>
            </Link>
            <Link to={'/donate'} style={{ textDecoration: 'none', color:'white' }}>
               <Button><Typography color="secondary">Donate</Typography></Button>
            </Link>
            <Link to={'/about'} style={{ textDecoration: 'none', color:'white' }}>
               <Button><Typography color="secondary">How It Works</Typography></Button>
            </Link>
            <IconButton
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="secondary">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.props.anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={open}
              onClose={this.handleClose}>
              <Link to={'/auth'} style={{ outline: 'none',textDecoration: 'none', color:'white' }}>
                <MenuItem>
                   <Typography color="primary">{this.props.user ? "Profile" : "Login"}</Typography>
                </MenuItem>
              </Link>
              { this.props.user ?
              <MenuItem onClick={this.logout}>
                <Typography color="primary">Logout</Typography>
              </MenuItem> : null
              }
            </Menu>
          </Toolbar>
          </Center>
        </AppBar>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    anchorEl: state.anchorEl,
    user: state.user
  }
}

export default connect(mapStateToProps)(Header);
