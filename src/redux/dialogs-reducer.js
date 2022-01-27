const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: state.newMessageBody
                }],
                newMessageBody: ""
            }

        default: return state
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_BODY,
            body: body,
        }
    )
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })