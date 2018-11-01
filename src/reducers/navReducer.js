const initialState = {
  anchorEl: null,
  user: null,
  authError:null,
  totalDon:0,
  totalFun:0
};

export default function reducer(state = initialState, action) 
{
  switch(action.type)
  {
    case 'LOG_IN':
      return {
        anchorEl:state.anchorEl,
        user:action.payload,
        authError:state.authError,
        totalDon: state.totalDon,
        totalFun: state.totalFun
      };
    case 'LOG_OUT':
      console.log("LOG_OUT|OUT");
      return {
        anchorEl:state.anchorEl,
        user:null,
        authError:state.authError,
        totalDon: state.totalDon,
        totalFun: state.totalFun
      };
      case 'CLOSE_NAV':
        return {
          user:state.user,
          anchorEl:null,
          authError:state.authError,
          totalDon: state.totalDon,
          totalFun: state.totalFun
        };
      case 'OPEN_NAV':
        return {
          user:state.user,
          anchorEl:action.payload,
          authError:state.authError,
          totalDon: state.totalDon,
          totalFun: state.totalFun
        };
      case 'AUTH_ERROR':
        return {
          user:state.user,
          anchorEl:state.payload,
          authError:action.payload,
          totalDon: state.totalDon,
          totalFun: state.totalFun
        };
      case 'CLEAR_AUTH_ERROR':
        return {
          user:state.user,
          anchorEl:state.anchorEl,
          authError:null,
          totalDon: state.totalDon,
          totalFun: state.totalFun
        };
      case 'Update_FUN':
        return {
          user:state.user,
          anchorEl:state.anchorEl,
          authError:state.authError,
          totalDon: state.totalDon,
          totalFun: action.payload,
        };
      case 'Update_DON':
        return {
          user:state.user,
          anchorEl:state.anchorEl,
          authError:state.authError,
          totalDon: action.payload,
          totalFun: state.totalFun
        };
    default: {
      console.log("Auth Reducer", state.anchorEl);
      return state;
    }
  }
}
