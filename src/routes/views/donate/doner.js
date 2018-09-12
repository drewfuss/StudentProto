import React, { Component } from 'react';
import Center from 'react-center';
import {Thumbnail, Panel } from 'react-bootstrap';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';

let payed;
let left;

class Doner extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillMount()
  {
  }

  handleChange = name => event => {
    if(event.target.value.length > 150)
    {
      return;
    }
    this.setState({
      [name]: event.target.value,
    });
  };

  render()
  {
    return (
      <div className="doner">
        <Center>
        <Typography variant="display1" gutterBottom>
          Meet, Drew
        </Typography>
        </Center>
        <Thumbnail rounded className='img-responsive'src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21317540_1821284607888701_6434665192614324473_n.jpg?_nc_cat=0&oh=56d27c861f41c1d52a5e2a132b30c87e&oe=5BDC3589"/>
        <Center>
        <Typography variant="subheading" gutterBottom>
          ${this.props.totalDon} / $175000
        </Typography>
        </Center>
        <LinearProgress color="primary" variant="determinate"value={this.props.totalDon/175000*100}/>
        <Center>
        <Button id='btnDonate'variant="extendedFab" color="primary" aria-label="Delete" onClick={() => this.setState({ open: !this.state.open })}>
          <Typography color="secondary">
            Donate
          </Typography>
        </Button>
        </Center>
        <Panel id="collapsible-panel-example-1 thePanel" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
            <TextField
              id="multiline-flexible"
              label="Comment"
              multiline
              rowsMax="2"
              rows="4"
              value={this.state.multiline}
              onChange={this.handleChange('multiline')}
              margin="normal"
              className='col-md-12 col-sm-12 col-xs-12'
              />
            <TextField
              id="number"
              label="Amount"
              value={this.state.age}
              onChange={this.handleChange('age')}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              className='col-md-12 col-sm-12 col-xs-12'
            />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) =>
{
  return {
    totalDon:state.totalDon
  };
}

export default connect(mapStateToProps)(Doner);
