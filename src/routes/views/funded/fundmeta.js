import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {db} from './../../../backend/firebase.js';
import {onUpdateTotalDon} from './../../../actions/actions.js';
import Snackbar from '@material-ui/core/Snackbar';

class FundMeta extends Component
{

  constructor(props)
  {
    super(props);
  }

  componentWillMount()
  {
    db.collection("meta").doc("donations")
    .onSnapshot({
        // Listen for document metadata changes
        includeMetadataChanges: true
    }, function(doc) {
      this.props.dispatch((onUpdateTotalDon(doc.data().totalDonations)));
    }.bind(this));
  }

  render()
  {
    /*        <Typography color="primary">
              <strong>Total People Funded: </strong>{this.props.totalFun}
            </Typography>*/
    return (
      <div>
        <Typography color="primary">
          <strong>Total Amount Raised: </strong>{this.props.totalDon}
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
