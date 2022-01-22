import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.map(
        (p) => <Post name={p.name} message={p.message} />
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        alert(newPostElement.current.value)
    }
    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}>

                </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>


    );
}
export default MyPosts;