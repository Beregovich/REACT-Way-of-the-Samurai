import React, { useState } from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    const [likes, setLikes] = useState(0);

    return (
        <div className={classes.item}>
            <span>
                Author: {props.name}
            </span>
            <div>
                {props.message}
            </div>
            <button onClick={() => {
                setLikes(likes + 1)
            }
            }>
                {likes}
            </button>
        </div>
    );
}
export default Post;