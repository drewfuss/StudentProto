import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

class MenuItem extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="doner">
        <Row>
          <Col md={2} xs={2}>
            <img className='thumbnail thumbnail-img'src={this.props.thumbnail}/>
          </Col>
          <Col className='push-left' md={10} xs={10}>
            <p>{this.props.name}</p>
            <p>Total: {this.props.total}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MenuItem;
