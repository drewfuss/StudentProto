import React, {Component} from 'react';
import Title from './views/title.js';
import Body from './views/donate/body.js';
import Footer from './views/footer';

class Donate extends Component
{

  constructor(props)
  {
    super(props);
    this.setState({
      live:{
        name:"Test",
        Total:2,
        Paid:1
      }
    })
    this.updateDonate = this.updateDonate.bind(this);
  }

  componentWillMount()
  {
    this.setState({
      live: {
        name: "Drew",
        Total: 40000,
        Paid: 20
      },
      onDeck: [
          { id: 1, name: "Leanne Graham" },
          { id: 2, name: "Ervin Howell" },
          { id: 3, name: "Clementine Bauch" },
          { id: 4, name: "Patricia Lebsack" }
        ]
    });
  }

  updateDonate(num)
  {
    console.log("UPDATING");
    this.setState({
      live: {
        name:"Drew",
        Total: 40000,
        Paid: (this.state.live.Paid + num) % this.state.live.Total
      }
    });

    console.log(this.state.live.Paid);
  }

  render()
  {
    console.log("RENDERING");
    console.log("Live:",this.state.live);
    return (
        <div>
          <Title />
          <Body onDeck = { this.state.onDeck } live={this.state.live} update = {this.updateDonate}/>
          <Footer />
        </div>
    )
  }
}

export default Donate;
