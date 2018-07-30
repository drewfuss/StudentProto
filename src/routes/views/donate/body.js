import React, {Component} from 'react';
import Doner from './doner';
import Menu from './menu';
import {Grid, Col, Row} from 'react-bootstrap';
import Center from 'react-center';
import './styles/donate.css';

const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

class Body extends Component
{
  constructor(props)
  {
    super(props);
  }

  componentDidMount()
  {

  }

  componentWillMount()
  {

  }
  render()
  {
    return (
      <Grid>
      <Row>
      <Col mdOffset={1} md={6} smOffset={1} sm={10}>
        <Doner name="Andrew Furniss"/>
      </Col>
      <Col mdOffset={1} md={3} smOffset={1} sm={10}>
        <Menu doners={contacts}/>
      </Col>
      </Row>
      </Grid>
    )
  }
}


export default Body;
