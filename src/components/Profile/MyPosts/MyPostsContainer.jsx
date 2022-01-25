import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext'

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                let state = store.getState().profilePage;
                return (
                    <MyPosts
                        addPost={addPost}
                        updateNewPostText={onPostChange}
                        posts={state.posts}
                        newPostText={state.newPostText}
                    />)
            }
            }
        </StoreContext.Consumer>
    );
}
export default MyPostsContainer;
