import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <Post name="Vasya" message="I'am Vasya, Hi!" />
            <Post name="Petya" message="I'am Petya, Hi!" />
            <Post name="Kolya" message="I'am Kolya, Hi!" />
        </div>


    );
}
export default MyPosts;