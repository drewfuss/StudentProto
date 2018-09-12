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

  componentWillMount()
  {



    /**this.setState({
      live: {
        name: "Drew",
        Total: 40000,
        Paid: 20
      }
    });*/
  }

  render()
  {
    return (
        <div>
          <Body/>
        </div>
    )
  }
}

export default Donate;
