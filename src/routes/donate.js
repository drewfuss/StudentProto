import React, {Component} from 'react';
import Title from './views/title.js';
import Body from './views/donate/body.js';
import Footer from './views/footer';

class Donate extends Component
{
  constructor(props)
  {
    super(props);
  }

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

export default Donate;
