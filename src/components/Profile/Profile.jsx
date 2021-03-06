import React from 'react'
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer store={props.store} />

        </div>

    )
}
export default Profile;
