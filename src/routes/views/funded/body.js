import React, {Component} from 'react';
import FundMeta from './fundmeta';
import FundList from './fundlist';
import Theme from './../../views/styles/headerTheme';
import { MuiThemeProvider} from '@material-ui/core/styles';


class Body extends Component
{
  render()
  {
    return (
      <div>
        <MuiThemeProvider theme={Theme}>
          <FundMeta />
          <FundList style={{marginTop:'20'}} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Body;
