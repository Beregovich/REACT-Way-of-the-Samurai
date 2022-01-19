import React from 'react'
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            </div>
            <div>
                Some description  or status;
            </div>
            <MyPosts />
        </div>

    )
}

export default Profile;
