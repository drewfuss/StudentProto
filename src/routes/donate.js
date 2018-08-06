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
          { id: 1, name: "Leanne Graham", thumbnail:"https://cdn.onlinewebfonts.com/svg/img_191958.png",total:22000 },
          { id: 2, name: "Ervin Howell", thumbnail:"https://cdn.onlinewebfonts.com/svg/img_191958.png",total:100 },
          { id: 3, name: "Clementine Bauch", thumbnail:"https://cdn.onlinewebfonts.com/svg/img_191958.png",total:2400 },
          { id: 4, name: "Patricia Lebsack", thumbnail:"https://cdn.onlinewebfonts.com/svg/img_191958.png",total:21200 }
        ]
    });
  }

  updateDonate(num)
  {
    this.setState({
      live: {
        name:"Drew",
        Total: 40000,
        Paid: (this.state.live.Paid + num) % this.state.live.Total
      }
    });
  }

  render()
  {
    return (
        <div>
          <Title user={this.props.user}/>
          <Body onDeck = { this.state.onDeck } live={this.state.live} update = {this.updateDonate}/>
          <Footer />
        </div>
    )
  }
}

export default Donate;
