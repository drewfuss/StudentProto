import React, {Component} from 'react';
import Center from 'react-center';
import { Row, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import './styles/funditem.css';

class FundItem extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <div className='container'>
      <Card className='fundItem col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1'>
        <Row>
          <Col md={1} xs={2}>
            <img className='thumbnail thumbnail-img'src="https://www.chccw.org/wp-content/uploads/profile-icon-IMG-2-300x300.png"/>
          </Col>
          <Center>
          <Col className='push-left' md={8} xs={8}>
              <p>{this.props.name}</p>
              <p>Funded On: {this.props.dateFunded}</p>
              <p>Amount Funded: ${this.props.amountLoan}</p>
          </Col>
          </Center>
        </Row>
        </Card>
      </div>
    )
  }
}

export default FundItem;
