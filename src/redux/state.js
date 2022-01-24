import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

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
            messages: [
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
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('update state')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}

window.store = store;
export default store;

/*   _addPost() {
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

    _updateNewMessageBody(newMessage) {
        this._state.dialogsPage.newMessageBody = newMessage;
        this._callSubscriber(this._state);
    },

    _sendMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageBody
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageBody = ""
        this._callSubscriber(this._state);
    },*/