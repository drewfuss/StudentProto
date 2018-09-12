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
        <Body />
      </div>
    )
  }
}

export default About;
