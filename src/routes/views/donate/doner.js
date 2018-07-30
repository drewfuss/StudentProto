import React, { Component } from 'react';
import Center from 'react-center';
import {Grid, Col, Row, ProgressBar, Button} from 'react-bootstrap';

let payed = 20000;
const left =  40000;

class Doner extends Component
{
  constructor(props)
  {
    super(props);
  }

  addPayment(num)
  {
    payed += num;
    console.log(payed);
  }

  render()
  {
    return (
      <div className="doner">
        <Center>
          <h1>{this.props.name}</h1>
        </Center>
        <img className='img-responsive'src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21317540_1821284607888701_6434665192614324473_n.jpg?_nc_cat=0&oh=56d27c861f41c1d52a5e2a132b30c87e&oe=5BDC3589"/>
        <ProgressBar now={payed/left*100} active bsStyle="success" label={`$${payed} / $${left}`}/>
        <Center>
          <Button onClick={this.addPayment(1000)}>Donate</Button>
        </Center>
      </div>
    )
  }
}

export default Doner;
