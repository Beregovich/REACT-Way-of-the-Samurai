import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postsElements = props.posts.map(
        (p) => <Post name={p.name} message={p.message} key={p.id} />
    )
    let onPostChange = (p) => {
        let text = p.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={props.addPost}>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;