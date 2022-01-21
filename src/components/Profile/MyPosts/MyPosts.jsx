import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.map(
        (p) => <Post name={p.name} message={p.message} />
    )
    return (
        <div className={classes.posts}>
            {postsElements}


        </div>


    );
}
export default MyPosts;