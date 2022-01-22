import { renderTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "I'am Vasya, Hi!", likesCount: 0 },
            { id: 2, message: "I'am Petya, Hi!", likesCount: 0 },
            { id: 3, message: "I'am Kolya, Hi!", likesCount: 0 },
        ],

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
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost)
    renderTree(state);
}
export default state;