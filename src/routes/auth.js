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
        <Title user={this.props.user}/>
        <Body user={this.props.user} login={this.props.login} logout={this.props.logout}/>
        <Footer />
      </div>
    )
  }
}

export default Auth;
