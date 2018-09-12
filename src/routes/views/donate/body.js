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
    return (
      <Grid>
      <Row>
        <Col mdOffset={1} md={4} smOffset={1} sm={10}>
          <Doner />
        </Col>
      </Row>
      </Grid>
    )
  }
}


export default Body;
