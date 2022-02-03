import React, { useEffect } from 'react';
import Header from './Header'
import * as axios from 'axios';
import { setAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'


const HeaderContainer = (props) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            debugger
            if (response.resultCode === 0) {
                debugger
                props.setAuthUserData(response.data.data)
            }
        })
    }
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);