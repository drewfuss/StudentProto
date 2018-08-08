const initialState = {
  anchorEl: null,
  user: null
};

export const authReducer = (state = initialState, action) =>
{
  switch(action.type)
  {
    case 'LOG_IN':
      return {
        anchorEl:state.anchorEl,
        user:action.payload
      };
    case 'LOG_OUT':
      console.log("LOG_OUT|OUT");
      return {
        anchorEl:state.anchorEl,
        user:null
      };
      case 'CLOSE_NAV':
        return {
          user:state.user,
          anchorEl:null
        };
      case 'OPEN_NAV':
        return {
          user:state.user,
          anchorEl:action.payload
        };
    default: {
      console.log("Auth Reducer", state.anchorEl);
      return state;
    }
  }
}
