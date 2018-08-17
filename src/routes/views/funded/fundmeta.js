import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class FundMeta extends Component
{
  render()
  {
    return (
      <div>
        <Typography color="primary">
          <strong>Total Amount Raised: </strong>{this.props.totalDon}
        </Typography>
        <Typography color="primary">
          <strong>Total People Funded: </strong>{this.props.totalFun}
        </Typography>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    totalDon:state.totalDon,
    totalFun:state.totalFun
  }
}

export default connect(mapStateToProps)(FundMeta);
