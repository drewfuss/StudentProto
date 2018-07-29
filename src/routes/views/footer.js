import React, { Component } from 'react';
import {Media, Col, Grid, Row, Well} from 'react-bootstrap';
import Center from 'react-center';
import './styles/footer.css';

class Footer extends Component
{
  render()
  {
    return (
      <Well>
      <Grid className='footer_grid'>
        <Row>
          <Col sm={6} md={4} mdOffset={2} xs={12}>
            <Media>
              <Media.Left>
                <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX14461188.jpg" className='' width={64} height={64}/>
              </Media.Left>
              <Media.Body>
              <Center className='full-size'>
                <Media.Heading>Insert App Name Here</Media.Heading>
              </Center>
              </Media.Body>
            </Media>
          </Col>
          <Col sm={6} md={4} xs={12}>
          <Media>
            <Media.Body>
              <Media.Heading>Resources</Media.Heading>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </Media.Body>
          </Media>
          </Col>
        </Row>
      </Grid>
      </Well>
    )
  }
}

export default Footer;
