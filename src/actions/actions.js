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
