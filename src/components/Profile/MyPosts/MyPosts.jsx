import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    { id: 1, name: "Vasya", message: "I'am Vasya, Hi!" },
    { id: 2, name: "Petya", message: "I'am Petya, Hi!" },
    { id: 3, name: "Kolya", message: "I'am Kolya, Hi!" },
]

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <Post name={postsData[0].name} message={postsData[0].message} />
            <Post name={postsData[1].name} message={postsData[0].message} />
            <Post name={postsData[2].name} message={postsData[0].message} />

        </div>


    );
}
export default MyPosts;