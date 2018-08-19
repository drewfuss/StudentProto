import React, {Component} from 'react';
import {db} from './../../../backend/firebase';
import FundItem from './funditem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Center from 'react-center';

class FundList extends Component
{

  componentWillMount()
  {
    // fetch data from firebase
    db.collection("users").where("funded", "==", true)
    .get()
    .then(function(querySnapshot) {
        this.setState({loading:false, liver:querySnapshot});
        // querySnapshot.forEach(function(doc) {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.data().amountDue);
        // });
        console.log(querySnapshot);
    }.bind(this))
    .catch(function(error) {
        //console.log("Error getting documents: ", error);
        this.setState({loading:false, error:  "Error Getting Docs"});
    }.bind(this));
  }
  constructor(props)
  {
    super(props);
    this.state = {
      loading:true,
      liver:null,
      error:null
    }
  }

  getLoader()
  {
    return (
      <Center>
        <CircularProgress size={50} color="primary" />
      </Center>
    )
  }
  render()
  {
    return (
      <div>
        {this.state.loading == true ?
          this.state.error ? <p>{this.state.error}</p> :
          this.getLoader()
           :
          this.state.liver.docs.map(l => <FundItem dateFunded={l.data().fundedDate} name={l.data().name} amountLoan={l.data().amountLoan}/>)
        }
      </div>
    )
  }
}

export default FundList;
