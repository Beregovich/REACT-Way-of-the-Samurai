import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer'
import { getUserStatus } from '../../redux/profile-reducer'
import { updateUserStatus } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let ProfileContainer = (props) => {
    let { userId } = useParams();
    useEffect(() => {
        if (!userId) {
            props.getUserProfile(2)
        }
        else {
            props.getUserProfile(userId)
            props.getUserStatus(userId)
        }

    }, [])

    return <Profile {...props} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})
export default connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })(ProfileContainer)




