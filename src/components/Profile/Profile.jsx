import React from 'react'
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProdileInfo';

function Profile() {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts />
        </div>

    )
}

export default Profile;
