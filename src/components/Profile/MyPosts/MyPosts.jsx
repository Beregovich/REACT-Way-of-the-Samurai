import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'


const MyPosts = (props) => {
    let postsElements = props.posts.map(
        (p) => <Post name={p.name} message={p.message} />
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={classes.postBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText} />
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