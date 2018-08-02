import React, { Component } from 'react';
import Center from 'react-center';
import {Grid, Col, Row, ProgressBar, Button} from 'react-bootstrap';

let payed;
let left;

class Doner extends Component
{
  constructor(props)
  {
    super(props);
    payed = this.props.live.Paid;
    left = this.props.live.Total;
  }

  render()
  {
    console.log("LAST RENDER");
    return (
      <div className="doner">
        <Center>
          <h1>{this.props.live.name}</h1>
        </Center>
        <img className='img-responsive'src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21317540_1821284607888701_6434665192614324473_n.jpg?_nc_cat=0&oh=56d27c861f41c1d52a5e2a132b30c87e&oe=5BDC3589"/>
        <ProgressBar now={this.props.live.Paid/this.props.live.Total*100} active bsStyle="success" label={`$${this.props.live.Paid} / $${this.props.live.Total}`}/>
        <Center>
          <Button onClick={() => this.props.update(10000)}>Donate</Button>
        </Center>
      </div>
    )
  }
}

export default Doner;
