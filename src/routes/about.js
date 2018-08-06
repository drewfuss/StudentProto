import React, {Component} from 'react';
import Title from './views/title.js';
import Body from './views/about/body.js';
import Footer from './views/footer';

class About extends Component
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

export default About;
