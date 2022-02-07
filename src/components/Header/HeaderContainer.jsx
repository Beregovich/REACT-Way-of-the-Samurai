import React, { useEffect } from 'react';
import Header from './Header'
import { getAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData();
    })

    return (
        <Header {...props} />
    )
}
const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.id

    })
}
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);