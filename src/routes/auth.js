import React, {Component} from 'react';
import Title from './views/title';
import Body from './views/auth/body';
import Footer from './views/footer';

class Auth extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <div>
        <Body login={this.props.login} />
      </div>
    )
  }
}

export default Auth;
