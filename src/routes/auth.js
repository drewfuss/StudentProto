import React, {Component} from 'react';
import Title from './views/title';
import Body from './views/auth/body';


class Auth extends Component
{
  render()
  {
    return (
      <div>
        <Title />
        <Body />
      </div>
    )
  }
}

export default Auth;
