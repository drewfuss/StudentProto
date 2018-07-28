import React, {Component} from 'react';
import Title from './views/title';
import Body from './views/funded/body';

class Funded extends Component
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

export default Funded;
