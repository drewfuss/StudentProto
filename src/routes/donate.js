import React, {Component} from 'react';
import Title from './views/title.js';
import Body from './views/donate/body.js';

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
        </div>
    )
  }
}

export default Donate;
