import React, {Component } from 'react';
import Title from './views/title.js';
import Body from './views/news/body.js';

class News extends Component
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

export default News;
