import React, { useEffect } from 'react'
import Profile from './Profile'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'


let ProfileContainer = (props) => {
    let { userId } = useParams();
    useEffect(() => {
        if (!userId) { userId = 2 }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            props.setUserProfile(response.data)
        })
    }, [props, userId]
    )
    return <Profile {...props} profile={props.profile} />
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)




