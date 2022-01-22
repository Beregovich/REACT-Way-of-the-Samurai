import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(
        d => <DialogItem id={d.id} name={d.name} />
    )


    let messagesElements = props.messages.map(
        m => <Message id={m.id} message={m.message} />
    )

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        alert(newMessageElement.current.value)
    }
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    )
}

export default Dialogs;
