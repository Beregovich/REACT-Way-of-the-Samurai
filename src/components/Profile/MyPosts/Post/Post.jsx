import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <span>
                Author: {props.name}
            </span>
            <div>
                {props.message}
            </div>
        </div>
    );
}
export default Post;