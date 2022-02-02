const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, message: "I'am Vasya, Hi!", likesCount: 0 },
        { id: 2, message: "I'am Petya, Hi!", likesCount: 0 },
    ],
    newPostText: '',
    profile: null

};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: return state
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
