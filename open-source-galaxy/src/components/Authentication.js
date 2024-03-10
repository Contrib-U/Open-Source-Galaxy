import React from 'react'
import Login from './Login';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function Authentication() {
    const { isAuthenticated } = useAuth0();
  return (
    
    isAuthenticated ? <Profile /> : <Login />
    
  )
}



export default Authentication
