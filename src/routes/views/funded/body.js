import React, {Component} from 'react';
import FundMeta from './fundmeta';
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
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Body;
