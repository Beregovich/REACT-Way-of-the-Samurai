import React from 'react';
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login/Login'

export const withAuthRedirect = (Component) => {
  return (
    function RedirectComponent(props) {
      let navigate = useNavigate();
      if (!props.isAuth) return <Login />
      return <Component {...props} />
    })

}



