import React, {Component} from 'react';
import Title from './views/title.js';
import Body from './views/about/body.js';
class About extends Component
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

export default About;
