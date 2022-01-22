import React from 'react'
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProdileInfo';

let posts = [
    { id: 1, name: "Vasya", message: "I'am Vasya, Hi!" },
    { id: 2, name: "Petya", message: "I'am Petya, Hi!" },
    { id: 3, name: "Kolya", message: "I'am Kolya, Hi!" },
]

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
            />

        </div>

    )
}
export default Profile;
