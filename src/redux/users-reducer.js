const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [/*
        {
            id: 1, photoUrl: 'https://cspromogame.ru//storage/upload_images/avatars/916.jpg',
            fullName: "Ivan!", status: 'Hello World!', followed: true,
            location: {
                country: 'Russis',
                city: 'Voronezh'
            }
        },
        {
            id: 2, photoUrl: 'https://cspromogame.ru//storage/upload_images/avatars/916.jpg',
            fuulName: "Petr!", status: 'Hello JS!', followed: false,
            location: {
                country: 'Russis',
                city: 'Novohopersk'
            }
        },
    */],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    } else { return { ...u } }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    } else { return { ...u } }
                })

            }
        case SET_USERS:
            return {

                ...state,
                users: [...state.users, ...action.users]
            }

        default: return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

