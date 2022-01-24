import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "I'am Vasya, Hi!", likesCount: 0 },
                { id: 2, message: "I'am Petya, Hi!", likesCount: 0 },
            ],
            newPostText: '',

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
        },
        sidebar: {}
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
