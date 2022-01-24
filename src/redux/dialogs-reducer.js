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
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ""
            return state
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