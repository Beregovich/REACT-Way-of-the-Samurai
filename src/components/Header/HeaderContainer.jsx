import React, { useEffect } from 'react';
import Header from './Header'
import { getAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'


const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData();
    }, [props]
    )
    return (
        <Header {...props} />
    )
}
const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,

    })
}
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);