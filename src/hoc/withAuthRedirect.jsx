import React from 'react';
import { useNavigate } from 'react-router-dom'

export const withAuthRedirect = (Component) => {
  return (
    function RedirectComponent(props) {
      let navigate = useNavigate();
      if (!props.isAuth) return navigate("/login")
      return <Component {...props} />
    })

}



