import React from 'react'
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProdileInfo';

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer
                dispatch={props.dispatch}
                store={props.store}
            />

        </div>

    )
}
export default Profile;
