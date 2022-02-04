import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    messages: [],
    data: {
        id: null,
        email: null,
        login: null,
        isFetching: false,
        isAuth: false
    }
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: return state
    }
}

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data))
            }
        })
    }
}


