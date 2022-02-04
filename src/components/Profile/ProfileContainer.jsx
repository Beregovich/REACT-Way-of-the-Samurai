import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'


let ProfileContainer = (props) => {
    let { userId } = useParams();
    useEffect(() => {
        if (!userId) { userId = 2 }
        props.getUserProfile(userId)
    }, [props, userId])
    return <Profile {...props} profile={props.profile} />
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, { getUserProfile })(ProfileContainer)




