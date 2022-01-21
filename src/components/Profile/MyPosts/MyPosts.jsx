import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
    { id: 1, name: "Vasya", message: "I'am Vasya, Hi!" },
    { id: 2, name: "Petya", message: "I'am Petya, Hi!" },
    { id: 3, name: "Kolya", message: "I'am Kolya, Hi!" },
]

let postsElements = posts.map(
    (p) => <Post name={p.name} message={p.message} />
)

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            {postsElements}


        </div>


    );
}
export default MyPosts;