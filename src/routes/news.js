import React, {Component } from 'react';
import Title from './views/title.js';
import Body from './views/news/body.js';
import Footer from './views/footer';

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
        <Body />
        <Footer />
      </div>
    )
  }
}

export default News;
