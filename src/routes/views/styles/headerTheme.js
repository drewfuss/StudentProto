import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import 'typeface-roboto'

const theme = createMuiTheme({
      palette: {
        primary: cyan,
        secondary: {
          main: '#FFFFFF',
        },
      },
      typography: {
      fontSize: 22,
      fontFamily: [
        'Roboto',
      ].join(','),
    },
});

export default theme;
