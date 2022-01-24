import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state'

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(
        d => <DialogItem id={d.id} name={d.name} />
    )

    let messagesElements = props.messages.map(
        m => <Message id={m.id} message={m.message} />
    )

    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(message))
    }

    let update
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    onChange={onNewMessageChange}
                    value={props.newMessageBody} />
            </div>
            <div>
                <button onClick={sendMessage}>Отправить</button>
            </div>

        </div>
    )
}

export default Dialogs;
