import React, {Component} from 'react';
import Title from './views/title';
import Body from './views/auth/body';
import Footer from './views/footer';

class Auth extends Component
{
  render()
  {
    return (
      <div>
        <Title />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Auth;
