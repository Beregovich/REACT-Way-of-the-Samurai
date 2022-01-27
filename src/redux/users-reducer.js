const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {
            id: 1, fuulname: "Ivan!", status: 'Hello World!', followed: true,
            location: {
                country: 'Russis',
                city: 'Voronezh'
            }
        },
        {
            id: 2, fuulname: "Petr!", status: 'Hello JS!', followed: false,
            location: {
                country: 'Russis',
                city: 'Novohopersk'
            }
        },
    ],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                })

            }
        default: return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
