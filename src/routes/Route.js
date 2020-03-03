import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {store} from '../store'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}){


  const { user } = store.getState().auth;
  
  if(!user && isPrivate){
    
    return <Redirect to="/" />
  }

  return (
    <Route
      { ...rest }
      component={Component}
    />
  )

}