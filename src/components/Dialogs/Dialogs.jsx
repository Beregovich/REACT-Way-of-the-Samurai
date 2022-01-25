
import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(
        d => <DialogItem id={d.id} name={d.name} />
    )
    let messagesElements = state.messages.map(
        m => <Message id={m.id} message={m.message} />
    )
    let sendMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
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
