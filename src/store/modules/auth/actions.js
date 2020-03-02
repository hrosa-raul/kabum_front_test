export function signInRequest(email, password){
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload: { email, password }
  }
}

export function signInSuccess(user){
  return {
    type: '@auth/SIGIN_SUCCESS',
    payload: { user }
  }
}

export function signInFail(message){
  return {
    type: '@auth/SIGIN_FAIL',
    payload: { message }
  }
}