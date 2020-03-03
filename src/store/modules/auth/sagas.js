import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history'
import api from '../../../services/api';

import { signInSuccess, signInFail } from './actions'

export function* signIn({payload}){
  const { email, password } = payload;

  try{ 
    const response = yield call(api.post, 'auth/login',{
      email,
      password
    });

    const { data } = response;

    if(data.status !== 200){
      yield put(signInFail(data.response))
      toast.error(data.response);
    }else{

      api.defaults.headers['token'] = data.response.token;
      
      yield put(signInSuccess(data.response))

      history.push('/home')
    }
    
  }catch(error){
    toast.error('Falha na autenticação.')
    console.tron.error(error.code);
  }


}

export function setToken({payload}){
  
  if(!payload || payload.auth.user === null) return false;
  
  const { token } = payload.auth.user

  if(token){
    api.defaults.headers['token'] = token;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn)
]);