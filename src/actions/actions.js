export function closeNavMenuAction() {
  return {type:'CLOSE_NAV'}
};

export function showNavMenuAction(payload) {
  return {type:'OPEN_NAV', payload}
};

export function authenticated(payload)
{
  return {type:'LOG_IN', payload}
}

export function unauthenticated()
{
  return {type:'LOG_OUT'}
}

export function onautherror(payload)
{
  return {type:'AUTH_ERROR', payload}
}

export function clearautherror()
{
  return {type:'CLEAR_AUTH_ERROR'}
}

export function onUpdateTotalDon(payload)
{
  return {type:'Update_DON', payload}
}
export function updateTotalFunded(payload)
{
  return {type:'Update_FUN', payload}
}
