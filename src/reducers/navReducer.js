const initialState = {
  anchorEl: null,
  user: null,
  authError:null,
};

export const authReducer = (state = initialState, action) =>
{
  switch(action.type)
  {
    case 'LOG_IN':
      return {
        anchorEl:state.anchorEl,
        user:action.payload,
        authError:state.authError
      };
    case 'LOG_OUT':
      console.log("LOG_OUT|OUT");
      return {
        anchorEl:state.anchorEl,
        user:null,
        authError:state.authError
      };
      case 'CLOSE_NAV':
        return {
          user:state.user,
          anchorEl:null,
          authError:state.authError
        };
      case 'OPEN_NAV':
        return {
          user:state.user,
          anchorEl:action.payload,
          authError:state.authError
        };
      case 'AUTH_ERROR':
        return {
          user:state.user,
          anchorEl:state.payload,
          authError:action.payload
        };
      case 'CLEAR_AUTH_ERROR':
        return {
          user:state.user,
          anchorEl:state.anchorEl,
          authError:null
        }
    default: {
      console.log("Auth Reducer", state.anchorEl);
      return state;
    }
  }
}
