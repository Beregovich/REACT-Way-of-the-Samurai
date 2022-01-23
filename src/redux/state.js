const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {


    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "I'am Vasya, Hi!", likesCount: 0 },
                { id: 2, message: "I'am Petya, Hi!", likesCount: 0 },
                { id: 3, message: "I'am Kolya, Hi!", likesCount: 0 },
            ],
            newPostText: 'Enter your text',

        },
        dialogsPage: {
            _messages: [
                { id: 1, message: "First" },
                { id: 2, message: "Second" },
                { id: 3, message: "Third" },
            ],
            dialogs: [
                { id: 1, name: "Vasya" },
                { id: 2, name: "Petya" },
                { id: 3, name: "Kolya" },
                { id: 4, name: "Serezha" },
            ],
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('update state')
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    _updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }
    }

}

export const updateNewPostTextActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            newText: text,
        }

    )
};
export const addPostActionCreator = () => ({ type: ADD_POST })

window.store = store;

export default store; 