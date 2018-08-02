import React, {Component} from 'react';
import Doner from './doner';
import Menu from './menu';
import {Grid, Col, Row} from 'react-bootstrap';
import Center from 'react-center';
import './styles/donate.css';


class Body extends Component
{

  constructor(props)
  {
    super(props);
  }
  componentWillReceiveProps(props) {
    this.setState({ live: props.live });
  }
  render()
  {
    console.log("RENDERING AGAIN");
    return (
      <Grid>
      <Row>
      <Col mdOffset={1} md={6} smOffset={1} sm={10}>
        <Doner live={this.props.live} update = {this.props.update}/>
      </Col>
      <Col mdOffset={1} md={3} smOffset={1} sm={10}>
        <Menu doners={this.props.onDeck}/>
      </Col>
      </Row>
      </Grid>
    )
  }
}


export default Body;
