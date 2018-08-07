import React, {Component} from 'react';
import Title from './views/title';
import Body from './views/funded/body';
import Footer from './views/footer';

class Funded extends Component
{
  render()
  {
    return (
      <div>
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Funded;
