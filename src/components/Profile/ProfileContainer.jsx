import React, { useEffect } from 'react'
import classes from './Content.module.css';
import Profile from './Profile'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'


let ProfileContainer = (props) => {
    //let { userId } = useParams();
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            props.setUserProfile(response.data)
        })
    }, [props]
    )
    return <Profile {...props} profile={props.profile} />
}
/*class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}*/

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)




